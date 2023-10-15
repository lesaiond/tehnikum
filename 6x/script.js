let swipeLeft = document.querySelector('.swipeLeft')
let slide = document.querySelector('.slide')
let swipeRight = document.querySelector('.swipeRight')
let offset = 0

swipeLeft.addEventListener('click' , function(){
    offset += 700
    if(offset > 700){
        offset = 0
    }
    slide.style.left = -offset + 'px'
})

swipeRight.addEventListener('click' , function(){
    offset -= 700
    if(offset < 0){
        offset = 700
    }
    slide.style.left = offset + 'px'
})