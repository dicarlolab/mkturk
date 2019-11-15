async function initThreeJS(CAMERAS) {
    // const canvaswebgl = document.querySelector("canvasvisiblewebgl");
    // const offscreencanvaswebgl = ('OffscreenCanvas' in window) ? canvaswebgl.transferControlToOffscreen() : canvaswebgl;
    // offscreencanvaswebgl.style = { width: 0, height: 0 }
    
    // init renderer
    console.time('init scene and camera')
    renderer = new THREE.WebGLRenderer({canvas: VISIBLECANVASWEBGL, antialias: true, alpha: true})
    //     renderer.setPixelRatio(window.devicePixelRatio);

    // renderer.setSize(VISIBLECANVASWEBGL.width,VISIBLECANVASWEBGL.height)
    //      renderer.setSize(VISIBLECANVASWEBGL.width,VISIBLECANVASWEBGL.height)
    //     renderer.setSize(window.innerWidth, window.innerHeight);

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
    // but it's better to have only one camera in the scene 
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
    console.timeEnd('init scene and camera')
}

function updateLightSingleFrame(index,light,currLightProperties,lightPosition){
    if (currLightProperties[index].position.x == lightPosition[0] &&
     currLightProperties[index].position.y == lightPosition[1] &&
     currLightProperties[index].position.z == lightPosition[2]){
         console.log('no light position change')
     }else{
         currLightProperties[index].position.x = lightPosition[0]
    currLightProperties[index].position.y = lightPosition[1]
    currLightProperties[index].position.z = lightPosition[2]

    light.position.set(lightPosition[0],lightPosition[1],lightPosition[2])
    console.log('light position change')
    console.log(lightPosition)
     }
}

