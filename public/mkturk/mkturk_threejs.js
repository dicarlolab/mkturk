async function initThreeJS(scenedata) {
    // const canvaswebgl = document.querySelector("canvasvisiblewebgl");
    // const offscreencanvaswebgl = ('OffscreenCanvas' in window) ? canvaswebgl.transferControlToOffscreen() : canvaswebgl;
    // offscreencanvaswebgl.style = { width: 0, height: 0 }

    // init renderer
    renderer = new THREE.WebGLRenderer({canvas: VISIBLECANVASWEBGL, antialias: true, alpha: true,preserveDrawingBuffer: false}) //WebGL uses 2 canvases and it's faster to swap them
    //https://stackoverflow.com/questions/27746091/preservedrawingbuffer-false-is-it-worth-the-effort

    //renderer.setPixelRatio(window.devicePixelRatio);
    // renderer.setSize(VISIBLECANVASWEBGL.width,VISIBLECANVASWEBGL.height)

    renderer.setClearColor(0x7F7F7F,0);
    renderer.physicallyCorrectLights = true;
    renderer.toneMappingExposure = 10;   // set exposure to light
    renderer.outputEncoding = THREE.sRGBEncoding;


    renderer.autoClear = false;
    renderer.setPixelRatio(ENV.ThreeJSRenderRatio)
    document.body.append(renderer.domElement);

    renderer.domElement.style.width =  VISIBLECANVAS.clientWidth+ 'px'; //keeps CSS size unchanged
    renderer.domElement.style.height =  VISIBLECANVAS.clientHeight+ 'px'; //keeps CSS size unchanged

    // init scene
    scene = {}

    for (const scenetype in scenedata){
        var indiv_scene = new THREE.Scene();
        scene[scenetype] = indiv_scene
    } // FOR n scenes
}// FUNCTION initThreeJS

async function addToScene(taskscreen){

    for (var classlabel = 0; classlabel<=IMAGES[taskscreen].length-1; classlabel++){

    //==== CAMERAS
        // init camera
        // loop through CAMERAS object
        // but it's better to have only one camera in the scene
        // add cameras if visible == 1

        //DEFAULTING TO CAMERA FOR FIRST CLASS'S SCENE 
        CAMERAS[taskscreen][classlabel]= []
        for (cam in IMAGES[taskscreen][classlabel].CAMERAS){
            var originvec = new THREE.Vector3(0,0,0)
            var unitvec = new THREE.Vector3(1,1,1)

            cameraLookAtOriginByDefault = originvec.clone()

                var camera = new THREE.PerspectiveCamera(IMAGES[taskscreen][classlabel].CAMERAS[cam].fieldOfVIEW,VISIBLECANVASWEBGL.width/VISIBLECANVASWEBGL.height,
                                IMAGES[taskscreen][classlabel].CAMERAS[cam].near,IMAGES[taskscreen][classlabel].CAMERAS[cam].far)

               // var camera = new THREE.OrthographicCamera(VISIBLECANVASWEBGL.width/-2, VISIBLECANVASWEBGL.width/2, VISIBLECANVASWEBGL.height/2,VISIBLECANVASWEBGL.height/-2,
                             //  IMAGES[taskscreen][classlabel].CAMERAS[cam].near,IMAGES[taskscreen][classlabel].CAMERAS[cam].far)
    
        // Do the math // when camera is positioned at (0,0,10) and looks at (0,0,0)
                camera.position.set(0,0,10)
                camera.lookAt(cameraLookAtOriginByDefault)
                camera.name = "cam"+classlabel
                scene[taskscreen].add(camera)
                camera.updateMatrixWorld(); // FIX
                camera.updateProjectionMatrix(); // FIX

                // Given scene camera, find scaling 3D scene -> 2D canvas
                var originscreen = toScreenPosition(originvec,camera)
                var unitscreen = toScreenPosition(unitvec,camera)
                var deltavec = [unitscreen.x - originscreen.x, unitscreen.y - originscreen.y]
                IMAGEMETA[taskscreen + "OriginScreenPixels"] = originscreen
                // IMAGES[taskscreen].originscreenPixels = originscreen
                IMAGEMETA[taskscreen + "THREEJStoPixels"] = Math.max.apply(null,deltavec)
                IMAGEMETA[taskscreen + "THREEJStoInches"] = (IMAGEMETA[taskscreen+ "THREEJStoPixels"])/ENV.ViewportPPI 

                //FOR CAMERA position
                IMAGES[taskscreen][classlabel].CAMERAS[cam].positionInches = {};
                for (keys in IMAGES[taskscreen][classlabel].CAMERAS[cam].position){
                    IMAGES[taskscreen][classlabel].CAMERAS[cam].positionInches[keys] = rescaleArrayInchestoTHREEJS(IMAGES[taskscreen][classlabel].CAMERAS[cam].position[keys],1/IMAGEMETA[taskscreen + "THREEJStoInches"])
                }

                //FOR LOOKAT target
                IMAGES[taskscreen][classlabel].CAMERAS[cam].targetTHREEJS = {};
                for (keys in IMAGES[taskscreen][classlabel].CAMERAS[cam].targetInches){
                    IMAGES[taskscreen][classlabel].CAMERAS[cam].targetTHREEJS[keys] = rescaleArrayInchestoTHREEJS(IMAGES[taskscreen][classlabel].CAMERAS[cam].targetInches[keys],IMAGEMETA[taskscreen + "THREEJStoInches"])
                }               
    //             controls = new THREE.OrbitControls(camera,renderer.domElement);
    //             controls.target = new THREE.Vector3(0, 0, 0)
                CAMERAS[taskscreen][classlabel][cam] = camera;
        } //FOR cam in cameras

//==== LIGHTS
    LIGHTS[taskscreen][classlabel]=[]
    for (var lt in IMAGES[taskscreen][classlabel].LIGHTS){
        var index = Object.keys(IMAGES[taskscreen][classlabel].LIGHTS).indexOf(lt);
        var light = new THREE.DirectionalLight(Number(IMAGES[taskscreen][classlabel].LIGHTS[lt].color),IMAGES[taskscreen][classlabel].LIGHTS[lt].intensity)
        light.name = classlabel
        scene[taskscreen].add(light)
        LIGHTS[taskscreen][classlabel][lt] = light;
    }//FOR lt lights

//==== OBJECTS
    const orig = new THREE.MeshPhysicalMaterial()
    for (var obj in IMAGES[taskscreen][classlabel].OBJECTS){
        var objects = OBJECTS[taskscreen][classlabel].meshes[obj].scene
        var materialparam = IMAGES[taskscreen][classlabel].OBJECTS[obj].material
 
        objects.traverse(function(child){
            //set texture
            if (child.material) {
                var material = new THREE.MeshPhysicalMaterial(materialparam)

                if (child.name == 'Base'){
                    material.map = child.material.map
                    child.material = material;
                    child.material.needsUpdate = true;
                }//IF "Base" mesh
            } //IF child.material
        }) //object.traverse (material)
    
        var bbox = new THREE.Box3();
        bbox.setFromObject( objects ); 
        var bbdim = new THREE.Vector3();
        bbox.getSize(bbdim)
        const dimarray = [bbdim.x,bbdim.y,bbdim.z]
        var maxlength = Math.max.apply(null,dimarray)
        
        IMAGES[taskscreen][classlabel].OBJECTS[obj].intrinsicMeshBoundingBox = dimarray     
        IMAGES[taskscreen][classlabel].OBJECTS[obj].intrinsicMeshMaxDim = maxlength
        

        var objSize = IMAGES[taskscreen][classlabel].OBJECTS[obj].sizeInches
          //TRANSLATION
        var objPosition = [
            IMAGES[taskscreen][classlabel].OBJECTS[obj].positionInches.x,
            IMAGES[taskscreen][classlabel].OBJECTS[obj].positionInches.y,
            IMAGES[taskscreen][classlabel].OBJECTS[obj].positionInches.z
        ]

        IMAGES[taskscreen][classlabel].OBJECTS[obj].sizeTHREEJS = rescaleArrayInchestoTHREEJS(objSize,IMAGEMETA[taskscreen + "THREEJStoInches"])
        IMAGES[taskscreen][classlabel].OBJECTS[obj].positionTHREEJS = {}
        for (keys in IMAGES[taskscreen][classlabel].OBJECTS[obj].positionInches){
            IMAGES[taskscreen][classlabel].OBJECTS[obj].positionTHREEJS[keys] = rescaleArrayInchestoTHREEJS(IMAGES[taskscreen][classlabel].OBJECTS[obj].positionInches[keys],IMAGEMETA[taskscreen + "THREEJStoInches"])
        }
        
        objects.name = classlabel
        scene[taskscreen].add(objects)
    }//FOR obj objects
}//FOR classlabels

//==== GridCenters in 3JS (==> POSSIBLE CAMERA OFFSETS FOR SAMPLE,TEST,CHOICE "ROOMS")
    IMAGEMETA[taskscreen + "XGridCenterTHREEJS"] = []
    IMAGEMETA[taskscreen + "YGridCenterTHREEJS"] = []
    for (var gridind=0; gridind <= ENV.XGridCenter.length-1; gridind++){
        var funcreturn = toTHREEJSOffset(ENV.XGridCenter[gridind],ENV.YGridCenter[gridind],taskscreen)
        IMAGEMETA[taskscreen + "XGridCenterTHREEJS"][gridind] = funcreturn[0]
        IMAGEMETA[taskscreen + "YGridCenterTHREEJS"][gridind] = funcreturn[1]
    } //FOR gridind
} //FUNCTION addToScene(taskscreen)


function updateSingleFrame3D(taskscreen,classlabels,frame,gridindex){

if (typeof(classlabels) == "number"){
    classlabels = [classlabels]
}

//==== TURN OFF ALL ITEMS
for ( var sceneElement in scene[taskscreen]["children"] ){
            scene[taskscreen]["children"][sceneElement].visible = false
    } //FOR sceneElements

//==== REMOVE BoxHelper
    for (var sceneElement in scene[taskscreen]["children"]){
        if (scene[taskscreen]["children"][sceneElement].type == "LineSegments"){
            scene[taskscreen].remove(scene[taskscreen]["children"][sceneElement])
        }
    }

//==== TURN BACK ON THE CURRENT DISPLAY ITEMS
for (var i=0; i<=classlabels.length-1; i++){
var classlabel = classlabels[i]

//==== CAMERAS
    for (var cam in IMAGES[taskscreen][classlabel].CAMERAS){
        // var camera = CAMERAS[taskscreen][classlabel][cam]

        var camera = scene[taskscreen].getObjectByName("cam"+classlabel)

        var nextvisible = chooseArrayElement(IMAGES[taskscreen][classlabel].CAMERAS[cam].visible,frame,0);

        var nextcamPosition = [
            chooseArrayElement(IMAGES[taskscreen][classlabel].CAMERAS[cam].position.x,frame,0), 
            chooseArrayElement(IMAGES[taskscreen][classlabel].CAMERAS[cam].position.y,frame,0),
            chooseArrayElement(IMAGES[taskscreen][classlabel].CAMERAS[cam].position.z,frame,0) ,
        ]

        var nextcamTarget = [chooseArrayElement(IMAGES[taskscreen][classlabel].CAMERAS[cam].targetTHREEJS.x,frame,0),
            chooseArrayElement(IMAGES[taskscreen][classlabel].CAMERAS[cam].targetTHREEJS.y,frame,0),
            chooseArrayElement(IMAGES[taskscreen][classlabel].CAMERAS[cam].targetTHREEJS.z,frame,0) ,
        ]

        if (nextvisible ==1){
            camera.visible = true
            updateCameraSingleFrame(camera,nextcamPosition,nextcamTarget)
            console.log("CAMERA" + taskscreen + cam+ "  " + classlabel + "  " + nextcamPosition + " " + nextcamTarget)
            var vec = new THREE.Vector3()
        }
        else{
            camera.visible = false
        }
    }
//==== LIGHTS
    for (var lt in IMAGES[taskscreen][classlabel].LIGHTS){
        var light = LIGHTS[taskscreen][classlabel][lt]

        var nextlightPosition = [
            chooseArrayElement(IMAGES[taskscreen][classlabel].LIGHTS[lt].position.x, frame, 0),
            chooseArrayElement(IMAGES[taskscreen][classlabel].LIGHTS[lt].position.y, frame, 0),
            chooseArrayElement(IMAGES[taskscreen][classlabel].LIGHTS[lt].position.z, frame, 0)
        ]

        var nextvisible = chooseArrayElement(IMAGES[taskscreen][classlabel].LIGHTS[lt].visible,frame,0);

        if (nextvisible == 1){
            light.visible = true
            updateLightSingleFrame(light,nextlightPosition)
        }
        else {
            light.visible = false
        } //IF visible
    }//FOR lt lights

//==== OBJECTS
    for (var obj in IMAGES[taskscreen][classlabel].OBJECTS){
        var objects = OBJECTS[taskscreen][classlabel].meshes[obj].scene
        var maxlength = IMAGES[taskscreen][classlabel].OBJECTS[obj].intrinsicMeshMaxDim

        //TRANSLATION
        var nextobjPosition = [
            chooseArrayElement(IMAGES[taskscreen][classlabel].OBJECTS[obj].positionTHREEJS.x,frame,0),
            chooseArrayElement(IMAGES[taskscreen][classlabel].OBJECTS[obj].positionTHREEJS.y,frame,0),
            chooseArrayElement(IMAGES[taskscreen][classlabel].OBJECTS[obj].positionTHREEJS.z,frame,0)
        ]
console.log("OBJECT" + taskscreen + obj + "  " + classlabel + "  " + nextobjPosition)

        //ROTATION
        var nextobjRotation = [
            chooseArrayElement(IMAGES[taskscreen][classlabel].OBJECTS[obj].rotationDegrees.x,frame,0),
            chooseArrayElement(IMAGES[taskscreen][classlabel].OBJECTS[obj].rotationDegrees.y,frame,0),
            chooseArrayElement(IMAGES[taskscreen][classlabel].OBJECTS[obj].rotationDegrees.z,frame,0)
        ]

        //SIZE
        var nextobjSize = chooseArrayElement(IMAGES[taskscreen][classlabel].OBJECTS[obj].sizeTHREEJS,frame,0)

        //VISIBILITY
        var nextvisible = chooseArrayElement(IMAGES[taskscreen][classlabel].OBJECTS[obj].visible,frame,0)

        // var camera = CAMERAS[taskscreen][classlabel][Object.keys(CAMERAS[taskscreen][classlabel])[0]]

        var camera = scene[taskscreen].getObjectByName("cam"+classlabel)
        
        if (nextvisible == 1){
            objects.visible = true
            var scenecenterX = ENV.XGridCenter[gridindex]
            var scenecenterY = ENV.YGridCenter[gridindex]
            updateObjectSingleFrame(taskscreen,objects,nextobjPosition,nextobjRotation,nextobjSize,maxlength,camera,scenecenterX,scenecenterY)
        }
        else {
            objects.visible = false
        }//IF visible
    }//FOR obj in scene
} //FOR classlabel in classlabels
}//FUNCTION updateSingleFrame3D

function updateCameraSingleFrame(camera,cameraPosition,camTarget){
    camera.position.set(cameraPosition[0],cameraPosition[1],cameraPosition[2])
    camera.lookAt(camTarget[0],camTarget[1],camTarget[2])
    camera.updateMatrixWorld( true );
    camera.updateProjectionMatrix(); // FIX
}//FUNCTION updateCameraSingleFrame

function updateLightSingleFrame(light,lightPosition){
    light.position.set(lightPosition[0],lightPosition[1],lightPosition[2])
//     console.log('3js: light position change')
//     console.log(lightPosition)
}//FUNCTION updateLightSingleFrame

function updateObjectSingleFrame(taskscreen,objects,objPosition,objRotation,objSize,maxlength,camera,scenecenterX,scenecenterY){
// objects.matrixWorldNeedsUpdate = false
// objects.matrixWorldNeedsUpdate = true

//====ROTATION
    //rotate around the World Axis
    //before rotating set rotation to 0,0,0
    objects.rotation.set(0,0,0)
    //Object axis changes as object rotates
    var axis = new THREE.Vector3(1,0,0) //x-axis
    var angle = THREE.Math.degToRad(objRotation[0])
    objects.rotateOnWorldAxis(axis,angle)

    var axis = new THREE.Vector3(0,1,0) //y-axis
    var angle = THREE.Math.degToRad(objRotation[1])
    objects.rotateOnWorldAxis(axis,angle)

    var axis = new THREE.Vector3(0,0,1) //z-axis
    var angle = THREE.Math.degToRad(objRotation[2])
    objects.rotateOnWorldAxis(axis,angle)

//====TRANSLATION
    objects.position.set(objPosition[0],objPosition[1],objPosition[2])

//==== SCALE
    //set size from parameters file
    //make that the largest dimension of the 3d cube = 1 inch
    //measure the current inch
    //current scale = (1,1,1)
    //before scaling set scale to 1,1,1
    //set scale so that visible length is 1 inch.
    objects.scale.set(1,1,1)
    objects.scale.divideScalar(maxlength/objSize)
    objects.updateMatrixWorld()

//==== BOUNDING BOX
    var box = new THREE.BoxHelper(objects,0xff0000)
    if (FLAGS.savedata == 1){
        box.material.visible = false //show bounding boxes during practice
    }
    else{
        box.material.visible = true //hide the bounding boxes during testing
    }
    box.name = taskscreen
	scene[taskscreen].add(box)
    var bbox = new THREE.Box3();
    bbox.setFromObject( box ); 
    var bbdim = new THREE.Vector3(); 

    twodcoord_max = toScreenPosition(bbox.max,camera,objects)
    twodcoord_min = toScreenPosition(bbox.min,camera,objects)

    if (taskscreen == "Test"){
        boundingBoxesChoice3D.x.push([twodcoord_min.x + (scenecenterX - IMAGEMETA[taskscreen + "OriginScreenPixels"].x),
                                        twodcoord_max.x + (scenecenterX - IMAGEMETA[taskscreen + "OriginScreenPixels"].x)].sort(function(a, b){return a-b}))
        boundingBoxesChoice3D.y.push([twodcoord_max.y + CANVAS.offsettop + (scenecenterY - IMAGEMETA[taskscreen + "OriginScreenPixels"].y),
                                        twodcoord_min.y + CANVAS.offsettop + (scenecenterY - IMAGEMETA[taskscreen + "OriginScreenPixels"].y)].sort(function(a, b){return a-b}))
    }
    return [objPosition,objSize]
}//FUNCTION updateObjectSingleFrame

function toScreenPosition(vector, camera,objects){
    
    var widthHalf = 0.5*renderer.getContext().canvas.width;
    var heightHalf = 0.5*renderer.getContext().canvas.height;

    vector.project(camera);

    vector.x = ( vector.x * widthHalf ) + widthHalf;
    vector.y = - ( vector.y * heightHalf ) + heightHalf;

    return {
        x: vector.x,
        y: vector.y
    };
}; //FUNCTION toScreenPosition(vector,camera)

function chooseArrayElement(x,idx,idx_default){
    if (typeof(x[idx]) == "undefined" && x.length >0){
        return x[idx_default]
    }
    else if (typeof(x.length) == "undefined"){
        return x
    } 
    else {
        return x[idx]
    }
} //FUNCTION chooseArrayElement

function rescaleArrayInchestoTHREEJS(sizeInchesArr,THREEJStoInches){
    sizeTHREEJS = []
    for (var i = 0; i<=sizeInchesArr.length-1; i++){
        sizeTHREEJS.push(sizeInchesArr[i]/THREEJStoInches)
    }

    return sizeTHREEJS
}


function toTHREEJSOffset(x,y,taskscreen){
    var widthHalf = 0.5*renderer.getContext().canvas.width;
    var heightHalf = 0.5*renderer.getContext().canvas.height;

    var xdisp = x-widthHalf  
    var ydisp = heightHalf-y 

    return [
        xdisp/IMAGEMETA[taskscreen + "THREEJStoPixels"],
        ydisp/IMAGEMETA[taskscreen + "THREEJStoPixels"]
    ]
} //FUNCTION toTHREEJSOffset