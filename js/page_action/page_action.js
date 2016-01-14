$( document ).ready(function() {
    console.log( "ready!" );
    document.getElementById("myBtn").addEventListener("click", function(e){
        var colorVars= $('input[type=color]').map(function(){
            return "@"+this.name+"\" : \""+this.value+"";//this.value;
        }).get();
        console.log( colorVars );

    });
});
