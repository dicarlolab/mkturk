function pingBigQueryEyeTable(){
	if (Object.keys(EVENTS['timeseries']['EyeData']).length > 0  && 
		typeof(bigqueryEyeTimer) != "undefined"){
		saveEyeDatatoBigQuery()
	} //if timer expired & new data added
	else {
		bigqueryEyeTimer = setTimeout(function(){
			clearTimeout(bigqueryEyeTimer)
			pingBigQueryEyeTable()
		},10000)
	} //else check again in 10 seconds
}//FUNCTION pingBigQueryEyeTable


function saveEyeDatatoBigQuery(){
eventtype = 'timeseries'
eventname = 'EyeData'
var nsamples = Object.keys(EVENTS[eventtype][eventname]).length 

	var eyedata = []
	for (var i=0; i<=nsamples-1; i++){
		eyedata.push(
			{
				'agent': ENV.Subject,
				'timestamp': EVENTS[eventtype][eventname][i][2],
	  			'trial_num': EVENTS[eventtype][eventname][i][3],
				'num_eyes': EVENTS[eventtype][eventname][i][4],
				'left_x': EVENTS[eventtype][eventname][i][5],
				'left_y': EVENTS[eventtype][eventname][i][6],
				'left_aux_0': EVENTS[eventtype][eventname][i][7],
				'left_aux_1': EVENTS[eventtype][eventname][i][8],
				'right_x': EVENTS[eventtype][eventname][i][9],
				'right_y': EVENTS[eventtype][eventname][i][10],
				'right_aux_0': EVENTS[eventtype][eventname][i][11],
				'right_aux_1': EVENTS[eventtype][eventname][i][12]
			}
		)//push single event
	}//FOR i events

	bqInsertEyeData(eyedata)

	//reset eye event accumulation in mkturk (reduce memory load)
	EVENTS[eventtype][eventname] = {}

	delete bigqueryEyeTimer //to start a new timer
	pingBigQueryEyeTable()
}//FUNCTION saveEyeDatatoBigQuery