var images = document.getElementById("bg-container").children
var index = 0
var timeout
var order = true

swap()

function swap(){
    if(index == images.length - 1){
        if(order)
            images[index].className += " hidden"
        var btn = document.getElementById("btn"+index).firstElementChild        
        btn.className = btn.className.replace(" inner-button-active", "")      
        index = 0
        images[index].className = images[index].className.replace(" hidden", "")      
        if(order){
            var nextbtn = document.getElementById("btn"+index).firstElementChild
            nextbtn.className += " inner-button-active"       
        }
    }else{
        if(order)
            images[index].className += " hidden"
        if(index == -1){
            images[0].className = images[0].className.replace(" hidden", "")
            var btn = document.getElementById("btn0").firstElementChild    
        }
        else{
            images[index + 1].className = images[index + 1].className.replace(" hidden", "")
            var btn = document.getElementById("btn"+index).firstElementChild
            btn.className = btn.className.replace(" inner-button-active", "")
        }              
        if(order){
            var nextbtn = document.getElementById("btn"+(index + 1)).firstElementChild
            nextbtn.className += " inner-button-active"
        }
        order = true
        index++;
    }
    timeout = setTimeout(swap, 5000);
}

function setIndex(val, e){
    if(val != index){
        images[index].className += " hidden"
        var nextbtn = document.getElementById("btn"+(index)).firstElementChild
        nextbtn.className = nextbtn.className.replace(" inner-button-active", "")
        var btn = document.getElementById("btn"+(val)).firstElementChild
        btn.className += " inner-button-active"
        order = false
        val == 0 ? index = -1: index = val - 1
        clearTimeout(timeout)
        swap()
    }
}