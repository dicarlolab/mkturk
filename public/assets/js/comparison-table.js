let tabledata = [
  {id: 1, name: 'PsychToolbox', lang: 'Matlab', open_src: false, apple: 'limited', win: 'limited', unix: true, ios: false, android: false, three_dim: true, amzn: false},
  {id: 2, name: 'MWorks', lang: 'C++', open_src: true, apple: true, win: false, unix: false, ios:true, android: false, three_dim: false, amzn: false},
  {id: 3, name: 'Vision Egg', lang: 'Python', open_src: true, apple: true, win: true, unix: true, ios:false, android: false, three_dim: true, amzn: false},
  {id: 4, name: 'PsychoPy', lang: 'Python', open_src: true, apple: true, win: true, unix: true, ios:false, android: false, three_dim: true, amzn: false},
  {id: 5, name: 'PsychoJS', lang: 'Javascript', open_src: true, apple: true, win: true, unix: true, ios: 'limited', android: true, three_dim: false, amzn: true},
  {id: 6, name: 'MkTurk', lang: 'Javascript', open_src: true, apple: true, win: true, unix: true, ios: 'limited', android: true, three_dim: true, amzn: true}
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

let table = new Tabulator('#comparison-table', {
  data: tabledata,
  layout: "fitColumns",
  columns: [
    {title: 'Name', field: 'name'},
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