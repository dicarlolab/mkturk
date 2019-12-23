import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import firebase from "firebase";
import "firebase/storage";

export class Mkthree {

  /* THREE.js member variables */
  private scene: THREE.Scene | null;
  private camera: THREE.PerspectiveCamera | null;
  private cameraPos: THREE.Vector3 | null;
  private controls: OrbitControls | null;
  private dirLight: THREE.DirectionalLight | null;
  private dirLightPos: THREE.Vector3 | null;
  private light: THREE.AmbientLight | null;
  private loader: GLTFLoader | null;
  private renderer: THREE.WebGLRenderer | null;
  public animationID: number;
  public active: boolean;

  public canvas: HTMLCanvasElement;
  
  /* constructor */
  constructor() {
    this.scene = null;
    this.camera = null;
    this.cameraPos = null;
    this.controls = null;
    this.dirLight = null;
    this.dirLightPos = null;
    this.light = null;
    this.loader = null;
    this.renderer = null;
    this.animationID = -1;
    this.active = false;
    this.canvas = document.querySelector("#three-canvas") as HTMLCanvasElement;
    let editorDiv = document.querySelector("#editor-div") as HTMLDivElement;
    this.canvas.width = editorDiv.offsetWidth;
    this.canvas.height = editorDiv.offsetHeight;
    this.canvas.style.width = String(editorDiv.offsetWidth);
    this.canvas.style.height = String(editorDiv.offsetHeight);
  }

  /**
   * Public function to display mesh specified by filepath to a canvas
   * specified by canvas
   * 
   * @param {string} filePath
   * @param {HTMLCanvasElement} canvas
   * @public
   */
  public async displayMesh(filePath: string) {
    console.time("displayMesh()");

    if (this.active) {
      this.destroy();
    }

    /* renderer setup */
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true });
    this.renderer.setClearColor( 0xFFFFFF );
    this.renderer.physicallyCorrectLights = true;
    this.renderer.toneMappingExposure = 10;
    this.renderer.gammaOutput = true;
    this.renderer.gammaFactor = 2.2;

    /* camera setup */
    this.cameraPos = new THREE.Vector3( 0, 0, 10 );
    this.camera = 
      new THREE.PerspectiveCamera( 45, this.canvas.width / this.canvas.height, 0.1, 2000 );
    this.camera.position.set( this.cameraPos.x, this.cameraPos.y, this.cameraPos.z );

    /* light setup */
    this.dirLightPos = new THREE.Vector3( 0, 2, 0 )
    this.dirLight = new THREE.DirectionalLight( 0xFFFFFF, 0.5);
    this.dirLight.position.set( this.dirLightPos.x, this.dirLightPos.y, this.dirLightPos.z )
    this.light = new THREE.AmbientLight( 0x404040, 0.1 );

    /* control setup */
    this.controls = new OrbitControls( this.camera, this.renderer.domElement );
    this.controls.target = new THREE.Vector3( 0, 0, 0);

    /* scene setup */
    this.scene = new THREE.Scene();
    this.scene.add(this.camera);
    this.scene.add(this.dirLight);
    this.scene.add(this.light);

    /* load mesh */
    let objectMesh: any = await this.loadMesh(filePath);

    /* add loaded mesh to scene */
    this.scene.add(objectMesh.scene)
    requestAnimationFrame(this.animate.bind(this));
    this.renderer.render(this.scene, this.camera);
    this.active = true;

    console.timeEnd("displayMesh()")
  }

  /**
   * Private function to load and return mesh specified by filepath 
   * 
   * @param {string} filePath
   * @returns {Promise}
   * @private
   */
  private async loadMesh(filePath: string) {
    
    let storageRef = firebase.storage().ref();
    
    try {
      let meshRef = storageRef.child(filePath);
      let meshUrl = await meshRef.getDownloadURL().catch(e => {
        console.error("Error:", e);
      });

      this.loader = new GLTFLoader();

      return new Promise((resolve, reject) => {
        try {
          this.loader?.load(meshUrl, function(gltf) {
            gltf.scene.traverse((child: any) => {
              if (child.material) {
                let material = new THREE.MeshPhongMaterial({ color: 0xFF0000, map: child.material.map });
                child.material = material;
                child.material.needsUpdate = true;
              }
            });
            resolve(gltf);
          });
        } catch (error) {
          console.error("Error:", error);
        }
      });
    } catch (error) {
      console.error("Error:", error);
    }
  }

  private animate() {
    this.animationID = requestAnimationFrame(this.animate.bind(this));
    if (this.scene && this.camera) {
      console.log("hi");
      this.renderer?.render(this.scene, this.camera);
    }
  }

  public destroy() {
    try {
      this.scene = null;
      this.camera = null;
      this.cameraPos = null;
      this.controls = null;
      this.dirLight = null;
      this.dirLightPos = null;
      this.light = null;
      this.loader = null;
      this.renderer = null;
      this.animationID = -1;
      this.active = false;
      cancelAnimationFrame(this.animationID);
    } catch (error) {
      console.error("Error destroying THREE Objects:", error);
    }
  }
}