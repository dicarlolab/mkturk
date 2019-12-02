async function initThreeJS(sceneparams) {
    // const canvaswebgl = document.querySelector("canvasvisiblewebgl");
    // const offscreencanvaswebgl = ('OffscreenCanvas' in window) ? canvaswebgl.transferControlToOffscreen() : canvaswebgl;
    // offscreencanvaswebgl.style = { width: 0, height: 0 }

    // init renderer
    console.time('init scene and camera')
    renderer = new THREE.WebGLRenderer({canvas: VISIBLECANVASWEBGL, antialias: true, alpha: true})
    //renderer.setPixelRatio(window.devicePixelRatio);

    // renderer.setSize(VISIBLECANVASWEBGL.width,VISIBLECANVASWEBGL.height)
    // renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.setClearColor(0x7F7F7F,0);
    renderer.physicallyCorrectLights = true;
    renderer.toneMappingExposure = 10;   // set exposure to light
    renderer.gammaOutput = true;
    renderer.autoClear = false;
    // document.body.append(renderer.domElement);
    // init scene
    // # of scenes = # of lights

    scene = {}

//     for (i=0; i<numScene;i++){
    for (const scenetype in sceneparams){
        var indiv_scene = new THREE.Scene();
        // init camera
        // loop through CAMERAS object
        // but it's better to have only one camera in the scene
        // add cameras if visible == 1
        var CAMERAS = sceneparams[scenetype][0].CAMERAS
        for (cam in CAMERAS){
            if (CAMERAS[cam].visible ==1){
               camera = new THREE.PerspectiveCamera(CAMERAS[cam].fieldOfVIEW,VISIBLECANVASWEBGL.width/VISIBLECANVASWEBGL.height,CAMERAS[cam].near,CAMERAS[cam].far)
               camera.position.set(CAMERAS[cam].positionInches.x,CAMERAS[cam].positionInches.y,CAMERAS[cam].positionInches.z)
               camera.lookAt(0,0,0)
               indiv_scene.add(camera)
            }
        }
        controls = new THREE.OrbitControls(camera,renderer.domElement);
        controls.target = new THREE.Vector3(0, 0, 0)

        raycaster = new THREE.Raycaster();
        mouse = new THREE.Vector2()
//         document.addEventListener( 'mousemove', onMouseMove, false )
        scene[scenetype] = indiv_scene
    } // FOR n scenes
    console.timeEnd('init scene and camera')
}// FUNCTION initThreeJS

async function addToScene(indiv_scenetype){
lightArray = [];
currLightProperties = []
currObjProperties = []

for (var i = 0; i<=SCENEdata[indiv_scenetype].length-1; i++){
    for (var lt in SCENEdata[indiv_scenetype][i].LIGHTS){
        var index = Object.keys(SCENEdata[indiv_scenetype][i].LIGHTS).indexOf(lt);
        var ltname = Object.keys(SCENEdata[indiv_scenetype][i].LIGHTS)[index]
        currLightProperties[index] = {}
        var light = new THREE.DirectionalLight(Number(SCENEdata[indiv_scenetype][i].LIGHTS[lt].color),SCENEdata[indiv_scenetype][i].LIGHTS[lt].intensity)
        lightArray[index] = light;
        scene[indiv_scenetype].add(light)
        // store current frame light properties
        currLightProperties[index].position = light.position;
        currLightProperties[index].color = light.color;
        currLightProperties[index].intensity = light.intensity;
        currLightProperties[index].visible = light.visible;
    } //FOR lt lights
} //FOR i samples


    // add objects

    const orig = new THREE.MeshPhysicalMaterial()
    for (var obj in SCENEdata.OBJECTS){
        var index = Object.keys(SCENEdata.OBJECTS).indexOf(obj);
        var objname = Object.keys(SCENEdata.OBJECTS)[index];
        if (objname.includes(indiv_scene.name)){
        currObjProperties[index] = {}
        var object = objectmeshArray[index].scene

        object.traverse(function(child){

        //set texture
        if (child.material) {
//                          const textureloader = new THREE.TextureLoader();
//                          console.log(child.material)
//                          var material = new THREE.MeshBasicMaterial({
//                              map: textureloader.load('https://threejsfundamentals.org/threejs/resources/images/wall.jpg')
//                          })
            const materialparam = {...orig,...object_materiallist[index]} //parameters update
            var material = new THREE.MeshPhysicalMaterial(materialparam)

            if (child.name == "Eyeliris" || child.name == "Eyeriris"){
                material.color.set('#000000')
            }
            else if (child.name == "Eyelsclera" || child.name == "Eyersclera"){
                material.color.set("#ffffff")
            }
            material.map = child.material.map
            child.material = material;
            child.material.needsUpdate = true;
        }


    })
        object.traverse(function(child){
         //compute bounding box
        if (child.name == 'Base'){
            child.geometry.computeBoundingBox()
            // box = new THREE.BoxHelper(child,0xff0000)
            // scene.add(box)
            var bb = child.geometry.boundingBox.clone()
            bbdim = new THREE.Vector3();
            currObjProperties[index].dimension = bb.getSize(bbdim) // width,height,depth
            const dimarray = [bbdim.x,bbdim.y,bbdim.z]
            maxlength = Math.max.apply(null,dimarray)
        }
})
        // change object scale so that the maximum length of the cube is 1 inch
        object.scale.divideScalar(maxlength/THREEJStoInches)
        currObjProperties[index].rescale = maxlength/THREEJStoInches
        indiv_scene.add(object)
        // store current frame object properties
        currObjProperties[index].positionInches = object.position
        currObjProperties[index].rotation = object.rotation
        currObjProperties[index].visible = true;
    }
}
} //FUNCTION addToScene