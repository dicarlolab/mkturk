let tabledata = [
  {id: 1, name: 'PsychToolbox', lang: 'Matlab', open_src: false, apple: 'limited', win: 'limited', unix: true, ios: false, android: false, three_dim: true, amzn: false},
  {id: 2, name: 'MWorks', lang: 'C++', open_src: true, apple: true, win: false, unix: false, ios:true, android: false, three_dim: false, amzn: false},
  {id: 3, name: 'Vision Egg', lang: 'Python', open_src: true, apple: true, win: true, unix: true, ios:false, android: false, three_dim: true, amzn: false},
  {id: 4, name: 'PsychoPy', lang: 'Python', open_src: true, apple: true, win: true, unix: true, ios:false, android: false, three_dim: true, amzn: false},
  {id: 5, name: 'PsychoJS', lang: 'Javascript', open_src: true, apple: true, win: true, unix: true, ios: 'limited', android: true, three_dim: false, amzn: true},
  {id: 6, name: 'MkTurk', lang: 'Javascript', open_src: true, apple: true, win: true, unix: true, ios: 'limited', android: true, three_dim: true, amzn: true}
];

let table = new Tabulator('#comparison-table', {
  data: tabledata,
  layout: "fitColumns",
  columns: [
    {title: 'Name', field: 'name'},
    {title: 'Language', field: 'lang'},
    {title: 'Open Source', field: 'open_src'},
    {title: 'MacOS', field: 'apple'},
    {title: 'Windows', field: 'win'},
    {title: 'Linux', field: 'unix'},
    {title: 'iOS (iPhone + iPad)', field: 'ios'},
    {title: 'Android', field: 'android'},
    {title: '3D Rendering', field: 'three_dim'},
    {title: 'Amazon MTurk', field: 'amzn'}
  ]
});