let tabledata = [
  {id: 1, name: 'PsychToolbox', url: 'http://psychtoolbox.org/overview.html', lang: 'MATLAB', open_src: false, apple: 'limited', win: 'limited', unix: true, ios: false, android: false, three_dim: true, amzn: false},
  {id: 2, name: 'MWorks', url: 'https://mworks.github.io/', lang: 'C++', open_src: true, apple: true, win: false, unix: false, ios:true, android: false, three_dim: false, amzn: false},
  {id: 3, name: 'MonkeyLogic', url: 'https://https://monkeylogic.nimh.nih.gov/index.html/', lang: 'MATLAB', open_src: true, apple: false, win: true, unix: false, ios: false, android: false, three_dim: false, amzn: false},
  {id: 4, name: 'Vision Egg', url: 'http://visionegg.org/', lang: 'Python', open_src: true, apple: true, win: true, unix: true, ios:false, android: false, three_dim: true, amzn: false},
  {id: 5, name: 'PsychoPy', url: 'https://www.psychopy.org/', lang: 'Python', open_src: true, apple: true, win: true, unix: true, ios:false, android: false, three_dim: true, amzn: false},
  {id: 6, name: 'PsychoJS', url: 'https://github.com/psychopy/psychojs', lang: 'Javascript', open_src: true, apple: true, win: true, unix: true, ios: 'limited', android: true, three_dim: false, amzn: true},
  {id: 7, name: 'MkTurk', url: 'https://mkturk.com/index.html',lang: 'Javascript', open_src: true, apple: true, win: true, unix: true, ios: 'limited', android: true, three_dim: true, amzn: true}
];

let fn = function(cell, formatterParams, onRendered) {
  if (cell.getValue() == true) {
    return "<i class='fas fa-check' style='color: #006400'></i>";
  } else if (cell.getValue() == 'limited') {
    return "<i class='fas fa-minus' style='color: #FF8C00'></i>";
  } else if (cell.getValue() == false) {
    return "<i class='fas fa-times' style='color: #B22222'></i>";
  }
}

let linkFormatter = function(cell) {
  return 
}

let table = new Tabulator('#comparison-table', {
  data: tabledata,
  layout: "fitColumns",
  columns: [
    {title: 'Name', field: 'name', formatter: 'link', formatterParams: {urlField: 'url'}},
    {title: 'Language', field: 'lang'},
    {title: 'Open Source', field: 'open_src', formatter: fn, hozAlign: 'center'},
    {title: 'MacOS', field: 'apple', formatter: fn, hozAlign: 'center'},
    {title: 'Windows', field: 'win', formatter: fn, hozAlign: 'center'},
    {title: 'Linux', field: 'unix', formatter: fn, hozAlign: 'center'},
    {title: 'iOS (iPhone + iPad)', field: 'ios', formatter: fn, hozAlign: 'center'},
    {title: 'Android', field: 'android', formatter: fn, hozAlign: 'center'},
    {title: '3D Rendering', field: 'three_dim', formatter: fn, hozAlign: 'center'},
    {title: 'Amazon MTurk', field: 'amzn', formatter: fn, hozAlign: 'center'}
  ]
});