async function initThreeJS(CAMERAS,numScene,sceneType) {
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

    scene = []

    for (let i=0; i<numScene;i++){
    	let indiv_scene = new THREE.Scene();
    // init camera
    // loop through CAMERAS object
    // but it's better to have only one camera in the scene
    // add cameras if visible == 1
    for (let cam in CAMERAS){
        if (CAMERAS[cam].visible ==1){
           camera = new THREE.PerspectiveCamera(CAMERAS[cam].fieldOfVIEW,VISIBLECANVASWEBGL.width/VISIBLECANVASWEBGL.height,CAMERAS[cam].near,CAMERAS[cam].far)
           camera.position.set(CAMERAS[cam].positionInches.x,CAMERAS[cam].positionInches.y,CAMERAS[cam].positionInches.z)
           camera.lookAt(0,0,0)
           indiv_scene.add(camera)
        }
    }
//     controls = new THREE.OrbitControls(camera,renderer.domElement);
//     controls.target = new THREE.Vector3(0, 0, 0)
//     controls.enableZoom = false;

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2()
    document.addEventListener( 'mousemove', onMouseMove, false )
    indiv_scene.name = sceneType[i]
    scene[i] = indiv_scene

    }

    console.timeEnd('init scene and camera')
}

function onMouseMove( event ) {

    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    console.log(mouse)
}


 lightArray = [];
    currLightProperties = []
      currObjProperties = []
async function addToScene(indiv_scene){

    for (let lt in SCENEdata.LIGHTS){
        let index = Object.keys(SCENEdata.LIGHTS).indexOf(lt);
        let ltname = Object.keys(SCENEdata.LIGHTS)[index]
        if (ltname.includes(indiv_scene.name)){
        currLightProperties[index] = {}
        let light = new THREE.DirectionalLight(Number(SCENEdata.LIGHTS[lt].color),SCENEdata.LIGHTS[lt].intensity)
        lightArray[index] = light;
        indiv_scene.add(light)
        // store current frame light properties
        currLightProperties[index].position = light.position;
        currLightProperties[index].color = light.color;
        currLightProperties[index].intensity = light.intensity;
        currLightProperties[index].visible = light.visible;
            }
        }

    // add objects

    const orig = new THREE.MeshPhysicalMaterial()
    for (let obj in SCENEdata.OBJECTS){
        let index = Object.keys(SCENEdata.OBJECTS).indexOf(obj);
        let objname = Object.keys(SCENEdata.OBJECTS)[index];
        if (objname.includes(indiv_scene.name)){
        currObjProperties[index] = {}
        let object = objectmeshArray[index].scene

        object.traverse(function(child){

        //set texture
        if (child.material) {
//                          const textureloader = new THREE.TextureLoader();
//                          console.log(child.material)
//                          var material = new THREE.MeshBasicMaterial({
//                              map: textureloader.load('https://threejsfundamentals.org/threejs/resources/images/wall.jpg')
//                          })
            const materialparam = {...orig,...object_materiallist[index]} //parameters update
            let material = new THREE.MeshPhysicalMaterial(materialparam)

            if (child.name === "Eyeliris" || child.name === "Eyeriris"){
                material.color.set('#000000')
            }
            else if (child.name === "Eyelsclera" || child.name === "Eyersclera"){
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
            let bb = child.geometry.boundingBox.clone()
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
}

async function updateSingleFrame(indiv_scene){

    for (let obj in SCENEdata.OBJECTS){

        let index = Object.keys(SCENEdata.OBJECTS).indexOf(obj);
        let objname = Object.keys(SCENEdata.OBJECTS)[index];
        if (objname.includes(indiv_scene.name)){
        let object = objectmeshArray[index].scene

        let nextobjPosition = [SCENEdata.OBJECTS[obj].positionInches.x[frame],
        SCENEdata.OBJECTS[obj].positionInches.y[frame],
        SCENEdata.OBJECTS[obj].positionInches.z[frame]]

        let nextobjRotation = [SCENEdata.OBJECTS[obj].rotationDegrees.x[frame],
        SCENEdata.OBJECTS[obj].rotationDegrees.y[frame],
        SCENEdata.OBJECTS[obj].rotationDegrees.z[frame]]

        let nextvisible = SCENEdata.OBJECTS[obj].visible[frame]

        if (nextvisible == 1){
            object.visible = true
            updateObjectSingleFrame(index,object,currObjProperties,nextobjPosition,nextobjRotation)
            }
        else{
            currObjProperties[index].visible = false;
            object.visible = false
        }
    }
}

    for (let lt in SCENEdata.LIGHTS){
    let index = Object.keys(SCENEdata.LIGHTS).indexOf(lt);

    let ltname = Object.keys(SCENEdata.LIGHTS)[index];
        if (ltname.includes(indiv_scene.name)){
    let light = lightArray[index]

    let nextlightPosition = [SCENEdata.LIGHTS[lt].positionInches.x[frame],
    SCENEdata.LIGHTS[lt].positionInches.y[frame],
    SCENEdata.LIGHTS[lt].positionInches.z[frame]]

    let nextvisible = SCENEdata.LIGHTS[lt].visible[frame];

    if (nextvisible == 1){
        light.visible = true
        updateLightSingleFrame(index,light,currLightProperties,nextlightPosition)
    }else{
        currLightProperties[index].visible = false;
        light.visible = false
    }
    }
}
}

function updateLightSingleFrame(index,light,currLightProperties,lightPosition){
    if (currLightProperties[index].position.x === lightPosition[0] &&
     currLightProperties[index].position.y === lightPosition[1] &&
     currLightProperties[index].position.z === lightPosition[2]){
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

function updateObjectSingleFrame(index,object,currObjProperties,objPosition,objRotation){

    // update Three js objects only if current properties change
	// update current properties

    //position
	if (currObjProperties[index].positionInches.x === objPosition[0] &&
	currObjProperties[index].positionInches.y === objPosition[1] &&
	currObjProperties[index].positionInches.z === objPosition[2]){
		console.log('no object position change')
	} else{
		currObjProperties[index].positionInches.x = objPosition[0]
		currObjProperties[index].positionInches.y = objPosition[1]
		currObjProperties[index].positionInches.z = objPosition[2]
//set size from parameters file
        //make that the largest dimension of the 3d cube = 1 inch
        //measure the current inch
        //current scale = (1,1,1)
        //set scale so that visible length is 1 inch.

        objPosition[0] = objPosition[0]*THREEJStoInches
        objPosition[1] = objPosition[1]*THREEJStoInches
        objPosition[2] = objPosition[2]*THREEJStoInches
		object.position.set(objPosition[0],objPosition[1],objPosition[2])
		console.log('object position change')

	}
	//rotation
	if (currObjProperties[index].rotation.x === objRotation[0] &&
	currObjProperties[index].rotation.y === objRotation[1] &&
	currObjProperties[index].rotation.z === objRotation[2]){
		console.log('no object rotation change')
	} else{
		currObjProperties[index].rotation.x = objRotation[0]
		currObjProperties[index].rotation.y = objRotation[1]
		currObjProperties[index].rotation.z = objRotation[2]
		//rotate around the World Axis
		//before rotating set rotation to 0,0,0
		object.rotation.set(0,0,0)
		//Object axis changes as object rotates
			var axis = new THREE.Vector3(1,0,0) //x-axis
			var angle = THREE.Math.degToRad(objRotation[0])
			object.rotateOnWorldAxis(axis,angle)

			var axis = new THREE.Vector3(0,1,0) //y-axis
			var angle = THREE.Math.degToRad(objRotation[1])
			object.rotateOnWorldAxis(axis,angle)

			var axis = new THREE.Vector3(0,0,1) //z-axis
			var angle = THREE.Math.degToRad(objRotation[2])
			object.rotateOnWorldAxis(axis,angle)

			console.log('object rotation change')
			console.log(objRotation)

            console.log(object.scale)
            object.traverse(function(child){
             if (child.name == 'Base'){
            child.geometry.computeBoundingBox()
            //var box = new THREE.BoxHelper(child,0xff0000)
            // scene.add(box)
            var bb = child.geometry.boundingBox.clone()
            child.updateMatrixWorld(true) //only set it to true to calculate the bounding box
            bbdim = new THREE.Vector3();
            bb.applyMatrix4(child.matrixWorld)
            currObjProperties[index].dimension = bb.getSize(bbdim) // width,height,depth
             console.log(bb.max)
             console.log(bb.min)
             console.log(toScreenPosition(bb.max,camera))
             console.log(toScreenPosition(bb.min,camera))
            child.updateMatrixWorld(false) //must set it back to false otherwise the object transformations will be based on the previous frame, not the token value.
            console.log(currObjProperties[index].dimension)
	

        }

//         twodcoord = toScreenPosition(object,camera)
    })


	}
}

function toScreenPosition(vector, camera){
//     var vector = new THREE.Vector3();

    var widthHalf = 0.5*renderer.getContext().canvas.width;
    var heightHalf = 0.5*renderer.getContext().canvas.height;

    //obj.updateMatrixWorld();
//     vector.setFromMatrixPosition(obj.matrixWorld);
    vector.project(camera);

    vector.x = ( vector.x * widthHalf ) + widthHalf;
    vector.y = - ( vector.y * heightHalf ) + heightHalf;

    return {
        x: vector.x,
        y: vector.y
    };

};
