
async function refreshExperiment(){
    var old_ImageBagsSample = TASK.ImageBagsSample
    var old_ImageBagsTest = TASK.ImageBagsTest

    TASK = await TASK_reader.get()
    
    if(!old_ImageBagsTest.equals(TASK.ImageBagsTest) || !old_ImageBagsSample.equals(TASK.ImageBagsSample)){
        FLAGS.need2loadImages = 1; 
    }

    TASK_ARCHIVE.push(TASK)
    TASK_ARCHIVE_COUNTER++
    
    refreshCanvasSettings(TASK); 
  
    for (var i = 0; i <= CANVAS.names.length-1; i++) {
        setupCanvas(CANVAS.obj[CANVAS.names[i]]);
    }
    if (DEVICE.DevicePixelRatio !== 1){
        scaleCanvasforHiDPI(CANVAS.obj.sample);
        scaleCanvasforHiDPI(CANVAS.obj.test);
    }

    CANVAS.workspace = [
        0,
        0,
        CANVAS.obj["touchfix"].width,
        CANVAS.obj["touchfix"].height
    ]
}


