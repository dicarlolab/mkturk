async function updatePlot(i){
    var window_size = 25 

    var disk_rev = await DIO.get_rev(CURRENT_VIEW['filepath'])
    if(CURRENT_VIEW['rev'] == disk_rev){
        console.log(i+ '. No change')
        return 
    }

    else if(CURRENT_VIEW['rev'] != disk_rev){
        console.log(i+'. Updating')
        CURRENT_VIEW['rev'] = disk_rev
        var trial_behavior = await DIO.read_textfile(CURRENT_VIEW['filepath'])
        trial_behavior = JSON.parse(trial_behavior)
        trial_behavior = trial_behavior['TRIAL_BEHAVIOR']
    }

    var trial_returns = trial_behavior['Return']
    var smoothed_trial_returns = smooth(trial_returns, window_size)

    var data = new google.visualization.DataTable()
    var data_array = []

    for (var j = 0; j<trial_behavior['Return'].length; j++){
        data_array.push([trial_behavior['trial_num_Session'][j], trial_behavior['Return'][j], smoothed_trial_returns[j]])
    }

    data.addColumn('number', 'Session trial number');
    data.addColumn('number', 'Trial reward');
    data.addColumn('number', 'Smoothed (n='+window_size+') reward');
    data.addRows(data_array);
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
      chart.draw(data, options);
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