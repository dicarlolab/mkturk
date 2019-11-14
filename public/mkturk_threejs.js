var renderer, camera, scene, controls, material, model, modelPos
const directionalLight = new  THREE.DirectionalLight( 0xffffff, 0.5 );


async function initThreeJS() {
    // init renderer
    console.time('start')
    renderer = new THREE.WebGLRenderer({canvas: VISIBLECANVASWEBGL, antialias: true})
//     renderer.setPixelRatio(window.devicePixelRatio);

// renderer.setSize(VISIBLECANVASWEBGL.width,VISIBLECANVASWEBGL.height)
//     renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.setClearColor(0x7F7F7F);
    renderer.physicallyCorrectLights = true;
    renderer.toneMappingExposure = 10;   // set exposure to light
    renderer.gammaOutput = true;
    renderer.gammaFactor = 2.2;
//     document.body.append(renderer.domElement);
    // init scene
    scene = new THREE.Scene();
    // init camera
    camera = new THREE.PerspectiveCamera(45, VISIBLECANVASWEBGL.width/VISIBLECANVASWEBGL.height, 0.1, 2000);
    cameraPos = new THREE.Vector3(0,10,0);
    camera.position.set(cameraPos.x,cameraPos.y,cameraPos.z); // our face mesh is loaded with its face up so
                                 // in order to directly put the face in the user's view, set the camera position in some distance from the origin in y direction
    scene.add(camera)
    //init light
    lightPos = new THREE.Vector3(-20,0,0)
    directionalLight.position.set(lightPos.x,lightPos.y,lightPos.z)
   //Because we set the camera to view from the y axis above,
                                            // it's easier to think of the lighting direction as x,z,y instead of x,y,z. 
                                            // from the center of the face stimulus, top is negative y and bottom is positive y.
                                            // from the center of the face stimulus, right is positive x and left is negative x.
                                            // from the center of the face stimulus, front is positive z and back is negative z.
    scene.add( directionalLight );
    controls = new THREE.OrbitControls(camera,renderer.domElement);
    controls.target = new THREE.Vector3(0, 2, 0);
    //load object
//     loadGLTFobj();   
//     animate()
//     // Load the background texture
//     var texture = THREE.ImageUtils.loadTexture(bk);
//     var backgroundMesh = new THREE.Mesh(
//         new THREE.PlaneGeometry(2, 2, 0),
//         new THREE.MeshBasicMaterial({
//             map: texture
//         }));
//     backgroundMesh .material.depthTest = false;
//     backgroundMesh .material.depthWrite = false;
//     // Create your background scene
//     var backgroundScene = new THREE.Scene();
//     var backgroundCamera = new THREE.Camera();
//     backgroundScene .add(backgroundCamera );
//     backgroundScene .add(backgroundMesh );
   
    console.timeEnd('start')
}
