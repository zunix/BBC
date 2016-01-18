setTimeout(function() {
    console.log("Hi from local storage handler!");
    loadLocalStorageFiles();
}, 1);


window.addEventListener('storage', function(e) {
  if(e.key == 'bbc_color'){
     changeColorVars(e);
  }
  console.log(e);
},true);

function changeColorVars(e) {
  var item = sessionStorage.getItem('bbc_color');
  if(item !== null && item !== ''){
    console.log("New value ["+e.newValue+"]");
    less.modifyVars({
      '@someColor': e.newValue
    });
  } else {
    console.log("ops bbc_color is null or not set :(");
  }
}

function loadLocalStorageFiles() {
  var item = sessionStorage.getItem('bbc_color');
  if(item !== null && item !== ''){
    console.log("Load: ["+item+"]");
    less.modifyVars({
      '@someColor': item
    });
  } else {
    console.log("ops bbc_color is null or not set :(");
  }
}
