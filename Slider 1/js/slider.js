var images = $(".img")
var slider = new CircularList()
var main

for(var i = 0; i < images.length; i++){
    slider.add(images[i])
}

var tail = slider.tail()
for(var i = 0; i < slider.size(); i++){
    var id = tail.element.id
    var element = $("#"+id)
    element.on('click', swap)
    tail = tail.right
    if(i === 2){
        main = element
        main.css({
            width: "489px",
            height: "366px"
        })
        main.children()[0].style.width = "489px"
        main.children()[0].style.height = "366px"
        console.log(main)
    }
}

function placeImages(tail = slider.tail()){
    var margin = 25
    var pos = 0
    for(var i = 0; i < slider.size(); i++){
        var id = tail.element.id
        var element = $("#"+id)
        var width = element.width()
        if(i === 0){
            pos = -width / 2
            element.animate({
                left: `${pos}px`,
                top : ($("#container").height() - element.height()) / 2 + "px"
            }, 1000)
            pos = width / 2 + margin;
        }else{
            element.animate({
                left: `${pos}px`,
                top : ($("#container").height() - element.height()) / 2 + "px"
            }, 1000)
            pos += width + margin  
        }   
        tail = tail.right
    }
}

function swap(){
    $(this).children()[0].style.width = "489px"
    $(this).children()[0].style.height = "366px"
    $(this).css({
        width: "489px",
        height: "366px",
        zIndex: "1000"
    })
    main.css({
        width: "316px",
        height: "237px",
        zIndex: "500"
    })
    main.children()[0].style.width = "316px"
    main.children()[0].style.height = "237px"
    main = $(this)
    mid = slider.search(main[0])
    //Se hizo así porque solo eran seis imágenes
    //En caso de hacerlo para n imágenes se necesitaría un loop
    mid.left.element.style.zIndex = 800
    mid.right.element.style.zIndex = 800
    mid.left.left.element.style.zIndex = 400
    mid.right.right.element.style.zIndex = 400
    mid.right.right.right.element.style.zIndex = 200
    tail = mid.left.left
    placeImages(tail)
}

placeImages()