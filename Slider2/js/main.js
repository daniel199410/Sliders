var images = document.getElementById("bg-container").children
var index = 0
var timeout

swap()

function swap(){
    if(index == images.length - 1){
        images[index].className += " hidden"
        var btn = document.getElementById("btn"+index).firstElementChild        
        btn.className = btn.className.replace(" inner-button-active", "")      
        index = 0
        images[index].className = images[index].className.replace(" hidden", "")
        var nextbtn = document.getElementById("btn"+index).firstElementChild
        nextbtn.className += " inner-button-active"       
    }else{
        images[index].className += " hidden"
        images[index + 1].className = images[index + 1].className.replace(" hidden", "")
        var btn = document.getElementById("btn"+index).firstElementChild
        var nextbtn = document.getElementById("btn"+(index + 1)).firstElementChild
        btn.className = btn.className.replace(" inner-button-active", "")
        nextbtn.className += " inner-button-active"
        index++;
    }
    timeout = setTimeout(swap, 5000);
}

function setIndex(val, e){
    e.preventDefault()
    index = val
    clearTimeout(timeout)
    console.log(index)
    swap()
}