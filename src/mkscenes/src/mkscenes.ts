import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export class MkScenes {
  private cvs: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  constructor(cvs?: HTMLCanvasElement) {
    if (cvs) {
      this.init(cvs);
    }
  }

  public init(cvs: HTMLCanvasElement) {
    this.bindCanvas(cvs);
    const rendererParams: THREE.WebGLRendererParameters = {
      canvas: this.cvs,
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: false,
    };

    this.renderer = new THREE.WebGLRenderer(rendererParams);
    this.renderer.setClearColor(0x7F7F7F, 0);
    this.renderer.physicallyCorrectLights = true;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.autoClear = false;
    this.renderer.setPixelRatio(window.devicePixelRatio);
    

    
  }



  private bindCanvas(cvs: HTMLCanvasElement) {
    // bind canvas element to this class and sets the physical and logical dimensions
    this.cvs = cvs;

    // CSS dimension sets the canvas size on the window (how big it is displayed)
    this.cvs.style.width = this.cvs.clientWidth + 'px';
    this.cvs.style.height = this.cvs.clientHeight + 'px';

    // Canvas dimension sets the canvas coordinate system
    this.cvs.width = this.cvs.clientWidth * window.devicePixelRatio;
    this.cvs.height = this.cvs.clientHeight * window.devicePixelRatio;

    
  }

  public renderScene(idx: number) {
    console.log('Rendering Scene', idx);
    
  }

  public getScreenPosition(vec: THREE.Vector3, cam: THREE.PerspectiveCamera) {
    // offsetX = widthHalf; offsetY = heightHalf;
    let offsetX = 0.5 * this.renderer.getContext().canvas.width;
    let offsetY = 0.5 * this.renderer.getContext().canvas.height;

    vec.project(cam);

    vec.x = (vec.x * offsetX) + offsetX;
    vec.y = -1 * (vec.y * offsetY) + offsetY;

    return { x: vec.x, y: vec.y };
  }
}