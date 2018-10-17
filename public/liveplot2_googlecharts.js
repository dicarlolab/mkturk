//======== Performance Line Plot =======//
var lineOptions={
	smooth: 5,
  	width: 900,
  	height: 400,
	hAxis: {title: 'Trial#'},
	vAxis: {title: 'Correct (%)', viewWindow: {min:0,max:1.0}},
	title: 'Subject 1',
	animation: {
		duration: 500,
		easing: 'linear',
		startup: true,
	},
	legend: {
		position: 'none',
	}
}

//======== Trial Slider =======//
var livesliderTrialOptions={
		filterColumnLabel: 'currentTrial',
		ui: {
			chartType: 'LineChart',
			chartOptions: {
				smooth: 20,
				hAxis: {baselineColor: 'none', title: 'Trial#'},
				vAxis: {title: '%',viewWindow: {min:0,max:1.0}},
				width: 800,
				height: 50,
				animation: {duration: 1000,easing:'out'}
			}, //chart options
		chartView: {
			columns: [0, 1]
		},
		minRangeSize: 2
	} //ui
}//options

//======== Cumulative Trials Area Plot =======//
var areaOptions={
  	width: 900,
  	height: 400,
  	areaOpacity: 0.5,
	hAxis: {title: 'Time (h)'},
	vAxes: {0: {title: 'Trial count'},
			1: {title: 'RFID & Weight (in thousands)'}
			},
	animation: {
		duration: 500,
		easing: 'linear',
		startup: true,
	},
	series: {0:	{targetAxisIndex:0},
			 1: {targetAxisIndex: 0},
			 2: {targetAxisIndex: 1},
			 3: {targetAxisIndex: 1}
	}
	//legend: {
	//	position: 'none',
	//},
	// series: {
	// 	0: {color: '#0000FF'},
	// 	1: {color: '#00FF00'},
	// }
}

//======== Time Slider =======//
var livesliderTimeOptions={
		filterColumnLabel: 'time',
		ui: {
			chartType: 'LineChart',
			chartOptions: {
				hAxis: {baselineColor: 'none', title: 'Time'},
				vAxis: {title: '#'},
				width: 800,
				height: 50,
				animation: {duration: 1000,easing:'out'}
			}, //chart options
		chartView: {
			columns: [0, 1]
		},
	} //ui
}//options

//======== ObjPerformanceBar ========//
var objPerfBarOptions={
	width: 900,
	height: 300,
	vAxis: {title: "counts", minValue:0, maxValue:1},
	hAxis: {title: "objects"},
	title: 'Object Performance',
	legend: {position: 'none'}
	
}

//======== Touch ScatterPlot =======//
var scatterOptions = {
	title: 'Touch Locations',
	width: 700,
	height: 700, 
	hAxis: {title: 'X position (pixels)', minValue: 0, maxValue: 1768/2},
	vAxis : {title: 'Y position (pixels)', minValue: 600, maxValue: 1744/2},
	series: {
		0: {color: 'black'},
		1: {color: 'red'},
		2: {color: 'blue',},
		3: {color: 'red'}

	}
}

//======== ChoiceBar ========//
var choiceBarOptions={
	width: 900,
	height: 300,
	vAxis: {title: "counts", minValue:0, maxValue:1},
	hAxis: {title: "choice"},
	title: 'Choice Bias',
	legend: {position:'none'}
}

//======== RewardHistogram ======//
var rewardBarOptions = {
	width: 900,
	height: 300,
	title: 'Amount of reward',
	vAxis: {title: "counts", minValue: 0, maxValue: 1},
	hAxis: {title: "reward amount"},
	legend: {
		position: 'none'
	}
}

var colormapJet=['#00008F','#00009F','#0000AF','#0000BF','#0000CF','#0000DF','#0000EF','#0000FF','#0010FF','#0020FF','#0030FF','#0040FF','#0050FF','#0060FF','#0070FF','#0080FF','#008FFF','#009FFF','#00AFFF','#00BFFF','#00CFFF','#00DFFF','#00EFFF','#00FFFF','#10FFEF','#20FFDF','#30FFCF','#40FFBF','#50FFAF','#60FF9F','#70FF8F','#80FF80','#8FFF70','#9FFF60','#AFFF50','#BFFF40','#CFFF30','#DFFF20','#EFFF10','#FFFF00','#FFEF00','#FFDF00','#FFCF00','#FFBF00','#FFAF00','#FF9F00','#FF8F00','#FF8000','#FF7000','#FF6000','#FF5000','#FF4000','#FF3000','#FF2000','#FF1000','#FF0000','#EF0000','#DF0000','#CF0000','#BF0000','#AF0000','#9F0000','#8F0000','#800000'];