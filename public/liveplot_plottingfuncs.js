
function isAuthenticated(){
    return !!getAccessTokenFromUrl()
}

//parse access token from url if in urls hash
function getAccessTokenFromUrl(){
    return utils.parseQueryString(window.location.hash).access_token
}


// Flow: 
// loadGoogleCharts --> getFileListDropbox
// checkFileStatus -- wait 1 second -- if new data -->
// readDatafromDropbox --> initializeChartData --> updatePlots
// SECTIONS:
//================== GOOGLE CHARTS LOADING ==================//
//================== DROPBOX STUFF ==================//
//================== DATA HANDLING ==================//
//================== PLOTTING ==================//
//================== GOOGLE CHARTS LOADING ==================//
// Asynchronous: Live plotting using google charts
function loadGoogleCharts(){
    // Load the Visualization API and the piechart package.
    google.charts.load('current', {'packages':['corechart', 'bar','table','controls']});
    google.charts.setOnLoadCallback(function(){
        dataPerformance = new google.visualization.DataTable()
        dataPerformance.addColumn('number','currentTrial')
        dataPerformance.addColumn('number','currentPerformance')

        
        
        // Create a dashboard.
        dashboard1 = new google.visualization.Dashboard(
            document.getElementById('dashboard1_div'));
        // Initialize plotting elements
        // See for chartrange example: https://google-developers.appspot.com/chart/interactive/docs/gallery/controls_5cece98b344aa0b1575282db7d34d5f4.frame
        livesliderTrial = new google.visualization.ControlWrapper({
            'controlType': 'ChartRangeFilter',
            'containerId': 'filtertrial_div',
            'options': livesliderTrialOptions,
            'state': {'range': {'start': 0, 'end': 100}}
        }) //wrapper
        liveline = new google.visualization.ChartWrapper({
            'chartType': 'LineChart',
            'containerId': 'line_div'
        })

        livesliderTime = new google.visualization.ControlWrapper({
            'controlType': 'ChartRangeFilter',
            'containerId': 'filtertime_div',
            'options': livesliderTimeOptions,
            'state': {'range': {'start': 0, 'end': 100}}
        }) //wrapper
        livearea = new google.visualization.ChartWrapper({
            'chartType': 'AreaChart',
            'containerId': 'area_div'
        })
        // Establish dependencies, declaring that the sliders drive 'liveline' & 'livearea',
        // so that data will only display for entries that are let through
        // given the chosen slider range.
        dashboard1.bind(livesliderTrial, liveline)
        // data formatters
        formatterDate = new google.visualization.DateFormat({pattern: 'h aa'})
        formatterDigits = new google.visualization.NumberFormat({fractionDigits: 2})
        formatterColor = new google.visualization.ColorFormat();
        // cell color formatting --> https://developers.google.com/chart/interactive/docs/reference#colorformatter
        dx=1/(colormapViridis.length-1);
        for (var i=0; i<=colormapViridis.length-1; i++){
            formatterColor.addRange(i*dx,(i+1)*dx,'gray',colormapViridis[i])
        }
        getFileListDropbox2();
    })
}
//================== GOOGLE CHARTS LOADING (end) ==================//
//================== DROPBOX STUFF ==================//
// Mkturk
var DBX_REDIRECT_URI = DBX_REDIRECT_URI_ROOT + "liveplot.html"
//return whether user was redirected here after authenticating
function isAuthenticated(){
    return !!getAccessTokenFromUrl()
}
//parse access token from url if in urls hash
function getAccessTokenFromUrl(){
    return utils.parseQueryString(window.location.hash).access_token
}
// Asynchronous: Get file list from dropbox directory
async function getFileListDropbox2(){
    var filelist = await DIO.listdir(file.dir)
    var menuobj = document.getElementById("file_list");
    for (var q = filelist.length-1; q>=0; q--){
        if (filelist[q].endsWith(".txt")){
            console.log("found ", filelist[q])
            file.list[q] = filelist[q]
            file.pathlist[q] = join([file.dir, filelist[q]])
            var opt = document.createElement('option')
            opt.value = q
            opt.innerHTML = file.list[q]
            menuobj.appendChild(opt)
        }
    }
    file.name = file.pathlist[file.pathlist.length-1]
    file.filehasChanged = true
    readDatafromDropbox2()
}
// Asynchronous: Check for file updates
function checkFileStatus2(){
    dbx.filesGetMetadata({path: file.name}).then(function(filemeta){
        if (file.rev != filemeta.rev){
            file.rev = filemeta.rev
            file.datahasChanged = true
            console.log('file was updated rev=' + file.rev)
        }
        else{
            file.datahasChanged=false
        }
        if (file.filehasChanged == true || file.datahasChanged == true){
            readDatafromDropbox2()
        }
        else {
            setTimeout(function(){checkFileStatus2()},1000)
        }
    })
    .catch(function(error){
        console.error(error)
    })
    return false
}

var datajson

//Asynchronous: Read data from selected file in dropbox
async function readDatafromDropbox2(){

    var text = await DIO.read_textfile(file.name)
    var datajson = JSON.parse(text)
    file.rev = await DIO.get_rev(file.name)
    
    dbx.filesDownload({path: file.name}).then(function(data){
        console.log("success: loaded file size " + data.size);
        file.rev = data.rev
        file.dateSaved = new Date(data.client_modified)
        //Parse date
        var ind1 = file.name.indexOf("/2")
        var ind2 = file.name.indexOf('_')
        var datestr = file.name.substring(ind1+1,ind2)
        file.dateCreated = new Date(datestr)
        var reader = new FileReader()
        reader.onload = function(e){
            datajson = JSON.parse(reader.result)
            console.log(datajson)
            file.data = {}; 
            file.data.Response = datajson['TRIAL_BEHAVIOR']['Response']
            file.data.CorrectItem = datajson['TRIAL_BEHAVIOR']['CorrectItem']
            file.data.StartTime = datajson['TRIAL_BEHAVIOR']['StartTime']
            file.data.CurrentStageIndex = datajson['TRIAL_BEHAVIOR']['CurrentStageIndex']
            file.data.Subject = datajson['SESSION']['SubjectID']
            
            file.data.BatteryLDT = datajson['DEVICE']['BatteryLDT']
            file.data.StartTime = datajson['TRIAL_BEHAVIOR']['CorrectItem']
            //file.data.StartTime = datajson['TRIAL_BEHAVIOR']['RewardPer1000Trials']
            //file.data.StartTime = datajson['TRIAL_BEHAVIOR']['StartTime']
            //file.data.StartTime = datajson['TRIAL_BEHAVIOR']['StartTime']

            parseImageInfo()
        }
        reader.readAsText(data.fileBlob)
    })
    .catch(function(error){
        console.error(error)
    })
    return false
}

function parseImageInfo(){
    
    if (file.filehasChanged==true){
        initializeChartData()
    }
    else if (file.datahasChanged==true){
        updatePlots()
    }
}
//================== DROPBOX STUFF (end) ==================//
//================== DATA HANDLING ==================//
// Synchronous: Initialize chart data matrices
function initializeChartData(){
    dataPerformance.removeRows(0,dataPerformance.getNumberOfRows());
    dataPerformance.removeColumns(0,dataPerformance.getNumberOfColumns());
  
    dataPerformance.addColumn('number','currentTrial')
    dataPerformance.addColumn('number','currentPerformance')
   
    updatePlots()
    file.filehasChanged=false
}
// Synchronous
function toTask(){
    task.rewardstage = 1;
    if (typeof(file.data.RewardStage) != "undefined"){
        task.rewardstage = file.data.RewardStage;
    }
    task.varsample = 3;
    if (typeof(file.data.UsePrototypeforSample) != "undefined"){
        if (file.data.UsePrototypeforSample == true){               
            task.imagefoldersample = 0;
        }
    }
    if (typeof(file.data.ImageFolderSample) != "undefined"){
        task.imagefoldersample = file.data.ImageFolderSample;
    }
    if (typeof(file.data.ImageFolderTest) != "undefined"){
        task.imagefoldertest = file.data.ImageFolderTest;
    }
    task.sampleon = file.data.SampleON;
    task.sampleoff = file.data.SampleOFF
    if (typeof(file.data.KeepSampleON) != "undefined"){
        if (file.data.KeepSampleON == 1){
            task.sampleoff = -1; //Sample left on
        }
    }
    task.nway = file.data.Nway;
    //task.nobj = file.data.ImageBagsTest.length;
    task.objectlist = file.data.ImageBagsTest
    task.rewardper1000 = 0;
    if (typeof(file.data.RewardPer1000Trials) != "undefined"){
        task.rewardper1000 = Math.round(file.data.RewardPer1000Trials);
    }
}
// Synchronous
function toVitals(){
    vitals.subject = file.data.Subject;
    vitals.trials = file.data.Response.length;
    vitals.time = Math.round(Math.round(file.data.StartTime[vitals.trials-1] - file.data.StartTime[0])/60000); //convert msec to minutes
vitals["automator"]
    if (typeof(file.data.Automator) != "undefined"){
        vitals.automator = file.data.Automator
    }
    else {
        vitals.automator = null
    }
    if (typeof(file.data.CurrentAutomatorStage) != "undefined"){
        vitals.currentautomatorstage = file.data.CurrentAutomatorStage
    }
    else {
        vitals.currentautomatorstage = null
    }
    if (typeof(file.data.CurrentAutomatorStageName) != "undefined"){
        vitals.currentautomatorstagename = file.data.CurrentAutomatorStageName
    }
    else {
        vitals.currentautomatorstagename = null
    }
    if (typeof(file.data.BatteryLDT) != "undefined"){
        vitals.batteryleft = Math.round(file.data.BatteryLDT[file.data.BatteryLDT.length-1][0]*100);
        vitals.batteryused = Math.round(file.data.BatteryLDT[0][0]*100 - vitals.batteryleft);
    }
    else {
        vitals.batteryleft = null;
        vitals.batteryused = null;
    }
    var ncorrect = 0;
    for (var i=0; i<=file.data.CorrectItem.length-1; i++){
        if (file.data.CorrectItem[i] == file.data.Response[i]){ // | file.data.RewardStage==0){
            ncorrect++;
        }
    }
    vitals.pctcorrect = Math.round(100 * ncorrect / file.data.Response.length);
    if (typeof(file.data.NReward) != "undefined"){
        vitals.nrewards = file.data.NReward.reduce(function(a, b) {
            return a + b;
        }, 0);
    }
    vitals.rewardestimate = 0;
    if (typeof(file.data.RewardPer1000Trials) != "undefined"){
        vitals.rewardestimate = Math.round(file.data.RewardPer1000Trials * vitals.nrewards / 1000);
    }
}
// Synchronous
function toPerformanceData(){
    dataPerformance.removeRows(0,dataPerformance.getNumberOfRows());
    //Create the data table
    var xdata = []
    var ydata = []
    var ntotal = []
    var ncorrect = []
    var tcurrent = []
    for (var i=0; i<=file.data.CorrectItem.length-1; i++){
        if (file.data.CorrectItem[i] == file.data.Response[i]){ // | file.data.RewardStage==0){
            ydata[i]=1;
        }
        else {
            ydata[i]=0;
        }
        xdata[i]=i;
        //Cumulative trials & correct trials
        ntotal[i]=xdata.length
        if (i>0){ ncorrect[i]=ncorrect[i-1]+ydata[i] }
        else if (i==0) { ncorrect[i] = ydata[i] }
    }
    ydata = smooth(ydata,lineOptions.smooth);
//Referencing to time file was last written & time of last trial rather than to file start.
//Done because file can be changed on the fly which changes file start relative to performance.now()

for (var i=0; i<=ydata.length-1; i++){
    dataPerformance.addRows([[xdata[i], ydata[i]]])
    var tfix = file.data.StartTime[i] //in milliseconds
    var t = new Date(file.dateSaved)
    t.setTime(t.getTime() -  tfix)
}
}

//================== DATA HANDLING (end) ==================//
//================== PLOTTING ==================//
// Synchronous
function updatePlots() {
    toVitals();
    toTask();
    toPerformanceData();
    addVitalsText();
    drawLine() //current
    file.datahasChanged=false
    checkFileStatus2();
}
// Synchronous
function addVitalsText(){
    lineOptions.title =
        vitals.subject + ": " + vitals.pctcorrect + "% " + "(n=" + vitals.trials + 
        ", r=" + vitals.nrewards + "=" + vitals.rewardestimate + "mL, " + vitals.time + "min)     " + 
        "\nCurrent stage:   " + file.data.CurrentStageIndex.slice(-1)+ 
        "\nBattery:   " + vitals.batteryleft + "% (" + -1*vitals.batteryused + "% change from start) " + 
        "\nLast Trial:   " + file.dateSaved.toLocaleTimeString('en-US')
    document.getElementById("page_title").innerHTML = vitals.subject;
}
// Synchronous

//Synchronous
function drawLine(){
    var nrows = dataPerformance.getNumberOfRows()
    var sliderstate = livesliderTrial.getState()
    //updating slider
    if (file.datahasChanged == true && file.filehasChanged == false){
        if (nrows <= 100){
            // expand window size automatically up to 100
            sliderstate.range.start = 0
            sliderstate.range.end = nrows
        }
        else {
            //shift slider over
            dtrials = nrows - ntrials
            sliderstate.range.start = sliderstate.range.start + dtrials
            sliderstate.range.end = sliderstate.range.end + dtrials
        }
    }
    else if (file.filehasChanged == true){
        //shift slider to end
        dslider = 100
        sliderstate.range.start = nrows - dslider
        sliderstate.range.end = nrows
        if (sliderstate.range.start < 0){
            sliderstate.range.start = 0
        }
    }
    liveline.setOptions(lineOptions)
    //move slider which will drive replotting
    livesliderTrial.setState({'range': {'start': sliderstate.range.start,'end': sliderstate.range.end}})
    dashboard1.draw(dataPerformance, {curveType: 'function'})
    ntrials = nrows //new trial range
}
