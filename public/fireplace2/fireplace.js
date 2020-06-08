let perfDt, trialDt, tableDt, perfChart, trialChart, table;



function loadCharts() {
  google.charts.load('current', {
    'packages': ['corechart', 'line', 'bar', 'table', 'controls']
  });

  google.charts.setOnLoadCallback(() => {
    perfDt = new google.visualization.DataTable();
    trialDt = new google.visualization.DataTable();
    tableDt = new google.visualization.DataTable();

    perfChart = new google.charts.Line(document.getElementById('perf-chart'));
    trialChart = new google.charts.Line(document.getElementById('trial-chart'));
    table = new google.visualization.Table(document.getElementById('table'));
  });
}

// function handlePerfSelect() {
//   let selection = perfChart.getSelection();
// }

