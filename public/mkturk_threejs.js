async function initThreeJS(CAMERAS) {
    // init renderer
   
    console.time('start')
    renderer = new THREE.WebGLRenderer({canvas: VISIBLECANVASWEBGL, antialias: true, alpha: true})
    // renderer.setPixelRatio(window.devicePixelRatio);

    // renderer.setSize(VISIBLECANVASWEBGL.width,VISIBLECANVASWEBGL.height)
    // renderer.setSize(VISIBLECANVASWEBGL.width,VISIBLECANVASWEBGL.height)
    // renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.setClearColor(0x7F7F7F);
    renderer.setClearColor(0x7F7F7F,0);
    renderer.physicallyCorrectLights = true;
    renderer.toneMappingExposure = 10;   // set exposure to light
    renderer.gammaOutput = true;

    // document.body.append(renderer.domElement);
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
    controls = new THREE.OrbitControls(camera,renderer.domElement);
    controls.target = new THREE.Vector3(0, 0, 0);
    console.timeEnd('start')
}