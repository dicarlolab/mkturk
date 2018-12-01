
var axislabelstyle = {
	color: 'black',
	fontSize: 20,
	bold: false,
	italic: false,
}

var titlestyle = {
	color: 'black',
	fontSize: 22,
	bold: true,
	italic: true,
}


var lineOptions={
  	width: 900,
  	height: 400,
	hAxis: {title: 'Days back', titleTextStyle: axislabelstyle},
	vAxis: {title: '% Correct', titleTextStyle: axislabelstyle},
	title: 'Performance',
	titleTextStyle: titlestyle,
	animation: {
		duration: 500,
		easing: 'linear',
		startup: true,
	}
}

var linetrialOptions={
  	width: 900,
  	height: 400,
	hAxis: {title: 'Days back', titleTextStyle: axislabelstyle},
	vAxis: {title: '# Trials', titleTextStyle: axislabelstyle},
	title: 'Number of Trials',
	titleTextStyle: titlestyle,
	animation: {
		duration: 500,
		easing: 'linear',
		startup: true,
	}
}

var tableOptions={
  	width: 600,
	sortColumn: 2,
	showRowNumber: true,
	height: '100%',
	title: 'Leaderboard',
	titleTextStyle: titlestyle
}