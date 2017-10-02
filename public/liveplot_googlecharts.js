//======== Performance Line Plot =======//
var lineOptions={
	smooth: 25,
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
	vAxis: {title: 'Trial count'},
	animation: {
		duration: 500,
		easing: 'linear',
		startup: true,
	},
	legend: {
		position: 'none',
	},
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


//======== Confusion Bar Plot =======//
var barOptions={
	width: 900,
	height: 300,
	vAxis: {title: 'Fraction',viewWindow: {min:0,max:1.0}},
	title: 'Confusions (object-level)',
	subtitle: 'Subject 1',
	animation: {
		duration: 1000,
		easing: 'linear',
		startup: true,
	},
};


//======== Confusion Table =======//
var cssClassNames={ //https://developers.google.com/chart/interactive/docs/examples#custom_table_example
	'headerRow': 'small-font',
	'tableRow': 'small-font',
}

var tableOptions={
	allowHtml: true,
	showRowNumber: true,
	width: 900,
	height: 400,
	alternatingRowStyle: false,
	frozenColumns: 1,
	cssClassNames: cssClassNames,
}

var colormapViridis=['#450558',
 '#460b5e',
 '#471163',
 '#471669',
 '#481c6e',
 '#482172',
 '#472676',
 '#472b7a',
 '#46307d',
 '#453580',
 '#433a83',
 '#423e85',
 '#404387',
 '#3e4888',
 '#3d4c89',
 '#3b518a',
 '#39548b',
 '#37588c',
 '#355c8c',
 '#33608d',
 '#31648d',
 '#30688d',
 '#2e6c8e',
 '#2c708e',
 '#2b748e',
 '#29788e',
 '#287b8e',
 '#267f8e',
 '#25838d',
 '#23878d',
 '#228a8d',
 '#218e8c',
 '#20918c',
 '#1f958b',
 '#1e998a',
 '#1e9c89',
 '#1ea087',
 '#20a485',
 '#22a784',
 '#25ab81',
 '#29af7f',
 '#2eb27c',
 '#33b679',
 '#39b976',
 '#40bd72',
 '#47c06e',
 '#4fc369',
 '#57c665',
 '#5ec961',
 '#67cc5c',
 '#70ce56',
 '#79d151',
 '#83d34b',
 '#8dd644',
 '#97d83e',
 '#a2da37',
 '#addc30',
 '#b7dd29',
 '#c2df22',
 '#cde01d',
 '#d7e219',
 '#e1e318',
 '#ece41a',
 '#f6e61f'];