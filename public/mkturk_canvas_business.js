function setupPlayspace(){
  var windowHeight = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;


    var windowWidth = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    var min_dimension = Math.min(windowHeight, windowWidth)*0.8



    PLAYSPACE.height = min_dimension
    PLAYSPACE.width = min_dimension // WORKSPACE_WIDTH_HEIGHT_RATIO is 1 for now 

    PLAYSPACE.leftbound = (windowWidth - PLAYSPACE.width)/2
    PLAYSPACE.rightbound = windowWidth-(windowWidth - PLAYSPACE.width)/2
    PLAYSPACE.topbound = (windowHeight - PLAYSPACE.height)/2
    PLAYSPACE.bottombound = windowHeight-(windowHeight - PLAYSPACE.height)/2


    console.log('setupCanvas', 'windowWidth', windowWidth, 'windowHeight', windowHeight)

    // Reference: https://www.w3schools.com/js/js_window.asp


}
function setupCanvas(canvasobj){

  
    var context = canvasobj.getContext('2d')
    
    var devicePixelRatio = window.devicePixelRatio || 1
    var backingStoreRatio = context.webkitBackingStorePixelRatio ||
      context.mozBackingStorePixelRatio ||
      context.msBackingStorePixelRatio ||
      context.oBackingStorePixelRatio ||
      context.backingStorePixelRatio || 1 // /1 by default for chrome?

    var _ratio = devicePixelRatio / backingStoreRatio

    //canvasobj.style.top=CANVAS.offsettop + "px";
    //canvasobj.style.left=CANVAS.offsetleft + "px";
    
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
    canvasobj.style.border='1px solid blue' 
    
    canvasobj.style.width=PLAYSPACE.width; // Set browser canvas display style to be workspace_width
    canvasobj.style.height=PLAYSPACE.height;



    context.imageSmoothingEnabled = false // then nearest neighbor?
    
    //var image_scale_width = DEVICE.gridwidth / DEVICE.source_image_width * _ratio
    //var image_scale_height = DEVICE.gridheight / DEVICE.source_image_height * _ratio

    //context.scale(image_scale_width, image_scale_height) 

    // Record details of playspace (canvas pixels)

} 


//================== IMAGE RENDERING ==================//


function defineImageGrid(ngridpoints, source_image_width, source_image_height, gridscale){
  // Inside of PLAYSPACE, define a grid system for easy references to task logic 


  var workspace_height = PLAYSPACE.height
  var workspace_width =  PLAYSPACE.width

  var gridwidth = Math.round(workspace_width / ngridpoints)
  var gridheight = Math.round(workspace_height / ngridpoints)
  
  var canvas_center_x = Math.round(PLAYSPACE.width / 2)
  var canvas_center_y = Math.round(PLAYSPACE.height / 2)

  var dx = PLAYSPACE.leftbound
  var dy = PLAYSPACE.topbound


  PLAYSPACE._xgridcent = []
  PLAYSPACE._ygridcent = []
  var xgridcent =[] 
  var ygridcent =[]
  var i_counter = 0
  for (var i_x=0; i_x<ngridpoints; i_x++){
    for (var i_y=0; i_y<ngridpoints; i_y++){
      
      xgridcent[i_counter] = Math.round(dx + gridwidth/2 + i_x * gridwidth)
      ygridcent[i_counter] = Math.round(dy + gridheight/2 + i_y * gridheight)
      

      PLAYSPACE._xgridcent[i_counter] = Math.round(gridwidth/2 + i_x * gridwidth)
      PLAYSPACE._ygridcent[i_counter] = Math.round(gridheight/2 + i_y * gridheight)

      i_counter++
    }
  }



  return [canvas_center_x, canvas_center_y, xgridcent, ygridcent]
}


async function drawGridDots(){
  canvasobj = document.getElementById('touchfix')
  canvasobj.style['z-index'] = 5

  var context = canvasobj.getContext('2d')


  var dot_pixelradius = 10
  var color = "white"

  //context.clearRect(0,0,CANVAS.obj.touchfix.width,CANVAS.obj.touchfix.height);

  // Draw grid dots
  var rad = dot_pixelradius;
  for (var i = 0; i < PLAYSPACE._xgridcent.length; i++){
    var xcent = PLAYSPACE._xgridcent[i];
    var ycent = PLAYSPACE._ygridcent[i];
    context.beginPath();
    context.arc(xcent,ycent,rad,0*Math.PI,2*Math.PI);
    context.fillStyle=color; 
    context.fill();
  }
  var tutorial_image = await SIO.load_image('tutorial_images/whitenoise_256x256.png')
  await renderImageAndScaleIfNecessary(tutorial_image, 4, canvasobj)
  await renderImageAndScaleIfNecessary(tutorial_image, 8, canvasobj)
}

async function renderImageAndScaleIfNecessary(image, grid_index, canvasobj){
  var context = canvasobj.getContext('2d')

  var devicePixelRatio = window.devicePixelRatio || 1
  var backingStoreRatio = context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio || 1 // /1 by default for chrome?

  var _ratio = devicePixelRatio / backingStoreRatio

  var original_left_start = DEVICE.XGridCenter[grid_index] - DEVICE.gridwidth/2// in virtual pixel coordinates
  var original_top_start = DEVICE.YGridCenter[grid_index] - DEVICE.gridheight/2

  var scaled_left_start = original_left_start * image.width / DEVICE.gridwidth // in canvas coordinates, which may or may not be scaled 
  var scaled_top_start = original_top_start * image.width / DEVICE.gridheight


  //canvasobj.width = original_canvas_width * _ratio // Scales size of source canvas up
  //canvasobj.height = original_canvas_height * _ratio
  //canvasobj.style.width = original_canvas_width + 'px' // Scales canvas to this size before multiplying by devicepixelratio
  //canvasobj.style.height = original_canvas_height + 'px'



  context.drawImage(image, scaled_left_start, scaled_top_start)

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
  xleft = Math.round(DEVICE.XGridCenter[grid_index] - 0.5*wd)
  ytop = Math.round(DEVICE.YGridCenter[grid_index] - 0.5*ht)
  console.log(canvasobj)
  console.log('_ratio', _ratio, 'xleft',xleft, 'ytop', ytop, 'wd', wd, 'ht', ht)

  context.drawImage(
    image, // Image element
    xleft, // dx: Canvas x-coordinate of image's top-left corner. 
    ytop, // dy: Canvas y-coordinate of  image's top-left corner. 
    ); // dheight. height of drawn image.

  // For drawing cropped regions of an image in the canvas, see alternate input argument structures,
  // See: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
  
  // Bounding boxes of images on canvas
  xbound=[xleft, xleft+wd];
  ybound=[ytop, ytop+ht];

  xbound[0]=xbound[0]+CANVAS.offsetleft;
  xbound[1]=xbound[1]+CANVAS.offsetleft;
  ybound[0]=ybound[0]+CANVAS.offsettop;
  ybound[1]=ybound[1]+CANVAS.offsettop;
  return [xbound, ybound]
}

async function renderImageOnCanvas(image, grid_index, scale, canvasobj){
  var context=canvasobj.getContext('2d');

  var xleft=NaN;
  var ytop=NaN;
  var xbound=[];
  var ybound=[];

  wd = image.width
  ht = image.height
  xleft = Math.round(DEVICE.XGridCenter[grid_index] - 0.5*wd*scale*DEVICE.CanvasRatio);
  ytop = Math.round(DEVICE.YGridCenter[grid_index] - 0.5*ht*scale*DEVICE.CanvasRatio);
  
  context.drawImage(
    image, // Image element
    xleft, // dx: Canvas x-coordinate of image's top-left corner. 
    ytop, // dy: Canvas y-coordinate of  image's top-left corner. 
    image.width*scale*DEVICE.CanvasRatio, // dwidth. width of drawn image. 
    image.height*scale*DEVICE.CanvasRatio); // dheight. height of drawn image.

  // For drawing cropped regions of an image in the canvas, see alternate input argument structures,
  // See: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
  
  // Bounding boxes of images on canvas
  xbound=[xleft, xleft+wd*scale*DEVICE.CanvasRatio];
  ybound=[ytop, ytop+ht*scale*DEVICE.CanvasRatio];

  xbound[0]=xbound[0]+CANVAS.offsetleft;
  xbound[1]=xbound[1]+CANVAS.offsetleft;
  ybound[0]=ybound[0]+CANVAS.offsettop;
  ybound[1]=ybound[1]+CANVAS.offsettop;
  return [xbound, ybound]
}
