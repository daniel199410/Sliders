var hidden = true

function menu(){
    var menu = document.getElementById("menu")
    if(hidden){
        menu.style.left = "0";
    }else{
        menu.style.left = "100%";
    }
    hidden = !hidden
}