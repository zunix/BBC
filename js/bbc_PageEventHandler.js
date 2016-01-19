function updatePage(data) {
  saveToSessionStorage(data);
  changeLayoutColors();
  changeImages();
}

function saveToSessionStorage(data) {
  sessionStorage.setItem('bbc_data',data);
}

function changeLayoutColors(){
  var bbc_object = JSON.parse(sessionStorage.getItem('bbc_data'));
  less.modifyVars(bbc_object.bbc_colors);
}

function changeImages(){
  var bbc_object = JSON.parse(sessionStorage.getItem('bbc_data'));
  console.log(bbc_object.bbc_logo_url);
  console.log(bbc_object.bbc_background_url);
}
