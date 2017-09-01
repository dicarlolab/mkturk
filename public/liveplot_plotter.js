
async function updatePlot(i){

    var window_size = 25 



    var disk_rev = await DIO.get_rev(CURRENT_VIEW['filepath'])
    
    

    
    if(CURRENT_VIEW['rev'] == disk_rev){
        
        console.log(i+ '. No change')

        // Update time elapsed string 
        return 
    }

    console.log(i+'. Updating')
    CURRENT_VIEW['rev'] = disk_rev

    

    var behavior_json = await DIO.read_textfile(CURRENT_VIEW['filepath'])
    behavior_json = JSON.parse(behavior_json)
    console.log(behavior_json)
    var trial_behavior = behavior_json['TRIAL_BEHAVIOR']
    var trial_returns = trial_behavior['Return']
    var smoothed_trial_returns = smooth(trial_returns, window_size)
    var tooltip = trial_behavior['StartTime']

    // Update header 
    var subjectname = behavior_json['SESSION']['SubjectID']
    var unix_start_timestamp = behavior_json['SESSION']['UnixTimestampAtStart'] // sec
    var last_trial_timestamp_delta = behavior_json['TRIAL_BEHAVIOR']['StartTime'].slice(-1)[0] // sec
    var last_trial_timestamp = Math.round(unix_start_timestamp + last_trial_timestamp_delta) // in seconds
    var last_trial_string = new Date(last_trial_timestamp).toLocaleTimeString('en-US')

    

    var batteryleft = Math.round(behavior_json['DEVICE']['BatteryLDT'].slice(-1)[0][0]*100);
    var batteryused = Math.round(batteryleft - behavior_json['DEVICE']['BatteryLDT'][0][0]*100);


    var header_string = subjectname+': '+Math.round(mean(trial_returns)*100*10)/10+'%'
    header_string+=' (n='+trial_returns.length+' trials'
    header_string+=', r='+sum(trial_returns)
    header_string+=', '+getTimeElapsedString(unix_start_timestamp)+' since start'
    header_string+=')<br>'
    header_string+='Battery: '+batteryleft+'% ('+batteryused+'% change)<br>'
    header_string+='Last trial: '+last_trial_string+' ('+getTimeElapsedString(last_trial_timestamp)+' ago)'

    document.getElementById('chart_header').innerHTML = header_string

    
    // Plot dataPerf
    var dataPerf = new google.visualization.DataTable()
    var data_array = []

    for (var j = 0; j<trial_behavior['Return'].length; j++){
        data_array.push([
            trial_behavior['trial_num_Session'][j], 
            trial_behavior['Return'][j], 
            smoothed_trial_returns[j], 
            ]) 
    }

    dataPerf.addColumn('number', 'Session trial number');
    dataPerf.addColumn('number', 'Trial reward');
    dataPerf.addColumn('number', 'Smoothed (n='+window_size+') reward');
    //dataPerf.addColumn({type:'string', role:'tooltip'})

    dataPerf.addRows(data_array);
    var options = {
        hAxis: {
          title: 'Session trial number'
        },
        vAxis: {
          title: 'Reward'
        }, 
        
        series:{0:{color:'#80A7DF', type:'scatter', pointSize:4,pointShape:{type:'star',sides:5, dent:0.2}, }, 
                1:{color:'#2580E8', curveType:'function', pointSize:0, type:'line'}}
      };


      var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
      chart.draw(dataPerf, options);


      // Draw action data 
      var dataAction = new google.visualization.DataTable()
      var action_array = {}


    for (var j = 0; j<trial_behavior['Response'].length; j++){
        var resp = trial_behavior['Response'][j]
        if(action_array[resp] == undefined){
            action_array[resp] = 0
        }
        action_array[resp]+=1
    }

    var action_numtimes = []
    dataAction.addColumn('string', 'Action');
    dataAction.addColumn('number', 'subject choice');
    for(var prop in action_array){
        if(action_array.hasOwnProperty(prop)){
            if(prop == "null"){
                dataAction.addRow([ 'timeout', action_array[prop]])
            }
            else{
                dataAction.addRow(['Grid chosen:'+prop, action_array[prop]])
            }
            console.log(prop, action_array[prop])
            
        }
    }

    var options = {
        hAxis: {
          title: '# times',
          minValue:'0'
        },
      };

    console.log(action_array)
    var chart = new google.visualization.BarChart(document.getElementById('actionChart_div'));
    chart.draw(dataAction, options);

}


function choiceTimeOut(timeout_length){
  return new Promise(
    function(resolve, reject){
      var timeout_reinforcement = 0 // todo: move into task params
      var timer_return = function(){resolve({
        "x":'timed_out', 
        "y":'timed_out', 
        'timestamp':performance.now(), 
        'reinforcement':timeout_reinforcement, 
        'region_index':'timed_out'})}

      setTimeout(timer_return,timeout_length)
    })
}