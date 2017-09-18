var images = $('#bg-container').children()
var index = 0
function start(){
    var slider = setInterval(function(){
        swap()
    }, 5000)
    for(var i = 0; i < images.length; i++){
        if(i == 0)
            $("#buttons").append(`<a href="" class="button" id="btn${i}"><span class="inner-button inner-button-active" id="span${i}"></span></a>`)
        else
            $("#buttons").append(`<a href="" class="button" id="btn${i}"><span class="inner-button" id="span${i}"></span></a>`)
    }
    var buttons = $("#buttons").children()
    for(var i = 0; i < buttons.length; i++){
        $(`#${buttons[i].id}`).on("click", function(e){
            e.preventDefault()
            clearInterval(slider)
            
        })
    }
}

function swap(){
    $("#"+images[index].id).animate({zIndex: 100})
    scale("#"+images[index].id, 1)
    $(`#span${index}`).addClass("inner-button-active")
    console.log($(`#btn${index}`))
    if(index == 0){
        $("#"+images[images.length - 1].id).animate({zIndex: -100})
        scale("#"+images[images.length - 1].id, 1.5)
        $(`#span${images.length - 1}`).removeClass("inner-button-active")
    }else{
        $("#"+images[index - 1].id).animate({zIndex: -100})
        scale("#"+images[index - 1].id, 1.5)
        $(`#span${index - 1}`).removeClass("inner-button-active")
    }   
    if(index == images.length - 1)
        index = 0
    else
        index++
}

function scale(item, value){
    $(item).css({
        "transform": `scale(${value})`})
}

function createButton(id){

}

start()