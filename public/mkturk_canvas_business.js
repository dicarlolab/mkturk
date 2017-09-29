function setupPlayspace(ngridpoints, estimated_eye_screen_distance_inches, estimated_screen_virtual_pixels_per_inch, estimated_grid_vertical_offset_inches, intended_grid_degrees_of_visual_angle){

  // Determine how many pixels the image should be on the screen to have a desired viewing angle size at a given viewing distance
  if(estimated_eye_screen_distance_inches != undefined){
    var intended_radians = intended_grid_degrees_of_visual_angle * Math.PI / 180

    var design_image_physical_inches = estimated_eye_screen_distance_inches * Math.atan(intended_radians + Math.tan(estimated_grid_vertical_offset_inches / estimated_eye_screen_distance_inches)) - estimated_grid_vertical_offset_inches

    var design_image_virtual_pixels = estimated_screen_virtual_pixels_per_inch * design_image_physical_inches
  }
  else{
    console.warn('User did not specify image viewing angle design parameters. Defaulting to PLAYSPACE dimensions = 85% of screen size...')
    design_image_virtual_pixels = Infinity
  }

  // Get window size
  var funcreturn = windowSize()
  var windowHeight = funcreturn[0]
  var windowWidth = funcreturn[1]
  // Reference: https://www.w3schools.com/js/js_window.asp

    var MARGIN_PROPORTION= 0.15
    var max_screen_dimension = Math.round(Math.min(windowHeight, windowWidth))*(1-MARGIN_PROPORTION)
    var min_dimension = Math.min(max_screen_dimension, design_image_virtual_pixels * ngridpoints)
    var min_dimension = Math.ceil(min_dimension)


    PLAYSPACE.height = min_dimension
    PLAYSPACE.width = min_dimension // WORKSPACE_WIDTH_HEIGHT_RATIO is 1 for now 

    PLAYSPACE.leftbound = Math.floor((windowWidth - PLAYSPACE.width)/2) // in units of window
    PLAYSPACE.rightbound = Math.floor(windowWidth-(windowWidth - PLAYSPACE.width)/2)
    PLAYSPACE.topbound = Math.floor((windowHeight - PLAYSPACE.height)/2)
    PLAYSPACE.bottombound = Math.floor(windowHeight-(windowHeight - PLAYSPACE.height)/2)


    console.log('windowWidth', windowWidth, 'windowHeight', windowHeight)

    defineImageGrid(ngridpoints)
}
function windowSize(){
  var windowHeight = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;


    var windowWidth = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
    return [windowHeight, windowWidth]
}

function _dpr(){
  var devicePixelRatio = window.devicePixelRatio || 1
  return devicePixelRatio
}

function onWindowResize(){
  // on window resize 
  var funcreturn = windowSize()
  var windowHeight = funcreturn[0]
  var windowWidth = funcreturn[1]

  SESSION.windowWidth = windowWidth
  SESSION.windowHeight = windowHeight 
  
  PLAYSPACE.leftbound = Math.floor((windowWidth - PLAYSPACE.width)/2) // as these are in units of the window, they should be updated when the window changes 
  PLAYSPACE.rightbound = Math.floor(windowWidth-(windowWidth - PLAYSPACE.width)/2)
  PLAYSPACE.topbound = Math.floor((windowHeight - PLAYSPACE.height)/2)
  PLAYSPACE.bottombound = Math.floor(windowHeight-(windowHeight - PLAYSPACE.height)/2)

  console.log('onWindowResize', PLAYSPACE.leftbound, PLAYSPACE.topbound)
}





function defineImageGrid(ngridpoints){
  // Inside of PLAYSPACE, define a grid system for easy references to task logic 


  var workspace_height = PLAYSPACE.height
  var workspace_width =  PLAYSPACE.width

  var gridwidth = Math.round(workspace_width / ngridpoints)
  var gridheight = Math.round(workspace_height / ngridpoints)
  PLAYSPACE._gridwidth = gridwidth
  PLAYSPACE._gridheight = gridheight
  var canvas_center_x = Math.round(PLAYSPACE.width / 2)
  var canvas_center_y = Math.round(PLAYSPACE.height / 2)

  var dx = PLAYSPACE.leftbound
  var dy = PLAYSPACE.topbound


  PLAYSPACE._xgridcent = [] // In units of playspace 
  PLAYSPACE._ygridcent = []
  PLAYSPACE._xgridleft = []
  PLAYSPACE._xgridright = []
  PLAYSPACE._ygridtop = []
  PLAYSPACE._ygridbottom = []
  PLAYSPACE._grid_boundingBox = []

  var xgridcent =[] 
  var ygridcent =[]
  var i_counter = 0
  for (var i_x=0; i_x<ngridpoints; i_x++){
    for (var i_y=0; i_y<ngridpoints; i_y++){
      
      xgridcent[i_counter] = Math.round(dx + gridwidth/2 + i_x * gridwidth)
      ygridcent[i_counter] = Math.round(dy + gridheight/2 + i_y * gridheight)
      

      PLAYSPACE._xgridcent[i_counter] = Math.round(gridwidth/2 + i_x * gridwidth)
      PLAYSPACE._ygridcent[i_counter] = Math.round(gridheight/2 + i_y * gridheight)
      PLAYSPACE._xgridleft[i_counter] = Math.round(i_x*gridwidth)
      PLAYSPACE._xgridright[i_counter] = Math.round(gridwidth+i_x*gridwidth)
      PLAYSPACE._ygridtop[i_counter] = Math.round(i_y*gridheight)
      PLAYSPACE._ygridbottom[i_counter] = Math.round(gridheight+i_y*gridheight)

      PLAYSPACE._grid_boundingBox[i_counter] = {'x': [PLAYSPACE._xgridleft[i_counter],PLAYSPACE._xgridright[i_counter]], 
                                                'y': [PLAYSPACE._ygridtop[i_counter],PLAYSPACE._ygridbottom[i_counter]]}

      i_counter++
    }
  }



  return [canvas_center_x, canvas_center_y, xgridcent, ygridcent]
}
function setupCanvas(canvasobj, use_image_smoothing){
  use_image_smoothing =  use_image_smoothing || false 
  console.log(canvasobj)
    var context = canvasobj.getContext('2d')
    
    var devicePixelRatio = window.devicePixelRatio || 1
    var backingStoreRatio = context.webkitBackingStorePixelRatio ||
      context.mozBackingStorePixelRatio ||
      context.msBackingStorePixelRatio ||
      context.oBackingStorePixelRatio ||
      context.backingStorePixelRatio || 1 // /1 by default for chrome?

    var _ratio = devicePixelRatio / backingStoreRatio

    
    canvasobj.width = PLAYSPACE.width * _ratio;
    canvasobj.height = PLAYSPACE.height * _ratio;

    // Center canvas 
    // https://stackoverflow.com/questions/5127937/how-to-center-canvas-in-html5
    canvasobj.style.padding = 0

    canvasobj.style.margin = 'auto'
    canvasobj.style.display="block"; //visible
    canvasobj.style.position = 'absolute'
    canvasobj.style.top = 0
    canvasobj.style.bottom = 0
    canvasobj.style.left = 0  
    canvasobj.style.right = 0
    canvasobj.style.border='1px dotted #E6E6E6' 
    
    canvasobj.style.width=PLAYSPACE.width+'px'; // Set browser canvas display style to be workspace_width
    canvasobj.style.height=PLAYSPACE.height+'px';

    // Draw blank gray 
    context.fillStyle="#7F7F7F"; 
    context.fillRect(0,0,canvasobj.width,canvasobj.height);
    

    // Remove overflow?
    //https://www.w3schools.com/cssref/pr_pos_overflow.asp

    console.log('Use image smoothing:', use_image_smoothing)
    context.imageSmoothingEnabled = use_image_smoothing // then nearest neighbor?


    //var image_scale_width = SESSION.gridwidth / SESSION.source_image_width * _ratio
    //var image_scale_height = SESSION.gridheight / SESSION.source_image_height * _ratio

    //context.scale(image_scale_width, image_scale_height) 

    // Record details of playspace (canvas pixels)

    if(_ratio !== 1){
      scaleContext(context)
    }
} 

function scaleContext(context){
   var devicePixelRatio = window.devicePixelRatio || 1
  var backingStoreRatio = context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio || 1 // /1 by default for chrome?
  console.log('devicePixelRatio', devicePixelRatio, 'backingStoreRatio', backingStoreRatio)
  var _ratio = devicePixelRatio / backingStoreRatio

  context.scale(_ratio, _ratio) 
}

//================== IMAGE RENDERING ==================//


async function drawGridDots(){
  canvasobj = document.getElementById('touchfix')
  //canvasobj.style['z-index'] = 5
  console.log(canvasobj)

  var context = canvasobj.getContext('2d')


  var dot_pixelradius = 10
  var color = "white"

  // https://www.w3schools.com/tags/canvas_clearrect.asp
  // Draw grid dots
  var rad = dot_pixelradius;
  for (var i = 0; i < PLAYSPACE._xgridcent.length; i++){
    var xcent = PLAYSPACE._xgridcent[i];
    var ycent = PLAYSPACE._ygridcent[i];
    console.log(xcent, ycent)
    context.beginPath();
    context.arc(xcent,ycent,rad,0*Math.PI,2*Math.PI);
    context.fillStyle=color; 
    context.fill();
  }
  var tutorial_image = await SIO.load_image('tutorial_images/trackpad.png')
  await renderImageAndScaleIfNecessary(tutorial_image, 0, canvasobj)
  await renderImageAndScaleIfNecessary(tutorial_image, 6, canvasobj)
  await renderImageAndScaleIfNecessary(tutorial_image, 2, canvasobj)
  await renderImageAndScaleIfNecessary(tutorial_image, 4, canvasobj)
  await renderImageAndScaleIfNecessary(tutorial_image, 8, canvasobj)
  console.log(windowSize())
}




async function renderImageOnCanvasLiterally(image, grid_index, canvasobj){

  var devicePixelRatio = window.devicePixelRatio || 1
  var backingStoreRatio = context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio || 1 // /1 by default for chrome?

   var _ratio = devicePixelRatio / backingStoreRatio


  // Centers canvas vertically and horizontally
  canvasobj.style.width = canvasobj.width / _ratio + 'px'
  canvasobj.style.height = canvasobj.height / _ratio + 'px'
  canvasobj.style.left = 0
  canvasobj.style.right = 0
  canvasobj.style.top = 0
  canvasobj.style.bottom = 0
  canvasobj.style.margin = 'auto'
  
  
  


  var xleft=NaN;
  var ytop=NaN;
  var xbound=[];
  var ybound=[];

  wd = image.width
  ht = image.height
  xleft = Math.round(PLAYSPACE._xgridleft[grid_index])
  ytop = Math.round(PLAYSPACE._ygridtop[grid_index])
  console.log(canvasobj)
  console.log('_ratio', _ratio, 'xleft',xleft, 'ytop', ytop, 'wd', wd, 'ht', ht)

  context.drawImage(
    image, // Image element
    xleft, // dx: Canvas x-coordinate of image's top-left corner. 
    ytop // dy: Canvas y-coordinate of  image's top-left corner. 
    ); // dheight. height of drawn image.

  // For drawing cropped regions of an image in the canvas, see alternate input argument structures,
  // See: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
  
  // Bounding boxes of images on canvas; in units of window
  xbound=[xleft, xleft+wd];
  ybound=[ytop, ytop+ht];

  xbound[0]=xbound[0]
  xbound[1]=xbound[1]
  ybound[0]=ybound[0]
  ybound[1]=ybound[1]
  return [xbound, ybound]
}


