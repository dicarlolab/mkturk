async function initThreeJS(CAMERAS) {
//     const canvaswebgl = document.querySelector("canvasvisiblewebgl");
// const offscreencanvaswebgl = ('OffscreenCanvas' in window) ? canvaswebgl.transferControlToOffscreen() : canvaswebgl;
// offscreencanvaswebgl.style = { width: 0, height: 0 }
    // init renderer
   
    console.time('start')
    renderer = new THREE.WebGLRenderer({canvas: VISIBLECANVASWEBGL, antialias: true, alpha: true})
//     renderer.setPixelRatio(window.devicePixelRatio);
//      renderer.setSize(VISIBLECANVASWEBGL.width,VISIBLECANVASWEBGL.height)
//     renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x7F7F7F,0);
    renderer.physicallyCorrectLights = true;
    renderer.toneMappingExposure = 10;   // set exposure to light
    renderer.gammaOutput = true;
    renderer.gammaFactor = 2.2;
//     document.body.append(renderer.domElement);
    // init scene
    scene = new THREE.Scene();
   
    // init camera

    // loop through CAMERAS object 
    // add cameras if visible == 1
    
    for (cam in CAMERAS){
        if (CAMERAS[cam].visible ==1){
           camera = new THREE.PerspectiveCamera(CAMERAS[cam].fieldOfVIEW,VISIBLECANVASWEBGL.width/VISIBLECANVASWEBGL.height,CAMERAS[cam].near,CAMERAS[cam].far) 
           camera.position.set(CAMERAS[cam].positionInches.x,CAMERAS[cam].positionInches.y,CAMERAS[cam].positionInches.z)
           camera.lookAt(0,0,0)
           scene.add(camera)
        }
    }
    
    //camera.lookAt(0,0,0)
    //init light
//     lightPos = new THREE.Vector3(-20,0,0)
//     directionalLight.position.set(lightPos.x,lightPos.y,lightPos.z)
//     cam.add( directionalLight );
    
  //  lightPos = new THREE.Vector3(0,10,2)
   // directionalLight2.position.set(lightPos.x,lightPos.y,lightPos.z)
   // camera.add(directionalLight2)

    controls = new THREE.OrbitControls(camera,renderer.domElement);
    controls.target = new THREE.Vector3(0, 0, 0);
    console.timeEnd('start')

}
