var index = 0
var images = document.getElementById("bg-container").children

function start(){
    var interval = setInterval(swap, 5000)
}

function swap(){
    if(index == images.length - 1){
        images[index].className += " hidden"
        index = 0
        images[index].className = images[index].className.replace(" hidden", "")
    }else{
        images[index].className += " hidden"
        images[index + 1].className = images[index + 1].className.replace(" hidden", "")
        index++;
    }
    console.log(index)
}

start();