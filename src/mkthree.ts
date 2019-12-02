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
  private static material: THREE.MeshPhongMaterial | null;
  private renderer: THREE.WebGLRenderer | null;
  private storageRef: firebase.storage.Reference;
  


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
    this.storageRef = firebase.storage().ref();
  }

  public async initThree(webglCanvas: HTMLCanvasElement) {
    console.time("initThree()");

    /* renderer setup */
    this.renderer = new THREE.WebGLRenderer({ canvas: webglCanvas, antialias: true });
    this.renderer.setClearColor( 0xFFFFFF );
    this.renderer.physicallyCorrectLights = true;
    this.renderer.toneMappingExposure = 10;
    this.renderer.gammaOutput = true;
    this.renderer.gammaFactor = 2.2;

    /* camera setup */
    this.cameraPos = new THREE.Vector3( 0, 0, 10 );
    this.camera = 
      new THREE.PerspectiveCamera( 45, webglCanvas.width / webglCanvas.height, 0.1, 2000 );
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

    console.timeEnd("initThree()")
  }

  public async loadMesh(filePath: string) {

    try {
      let meshRef = this.storageRef.child(filePath);
      let meshUrl = await meshRef.getDownloadURL().catch((e: any) => {
        console.error("Error retrieving Mesh URL:", e);
      });

      let returnValue: any;

      this.loader = new GLTFLoader();

      returnValue = this.loader.load(
        meshUrl,
        function (gltf) {
          gltf.scene.traverse((child: any) => {
            if (child.material) {
              console.log("child material:", child.material);
              Mkthree.material = new THREE.MeshPhongMaterial({ color: 0xFF0000, map: child.material.map });
              child.material = Mkthree.material;
              child.material.needsUpdate = true;
            }
          });
          return gltf;
        }
      );


    }

    catch (error) {
      console.error("Error:", error);
    }
  }

}