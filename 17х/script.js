let number = document.querySelector('#number').value
// let number = '+998998007744'
let btn = document.querySelector('#btn')
let text = document.querySelector('#text')

btn.addEventListener('click', function(){

    let list = number.split('');
    console.log(list)
    if(list[0] == '+'){
        list.shift()
    }else{}
    if(list[0] == '9' && list[1] == '9' && list[2] == '8' && list.length == 12){
        alert('Это узбекский номер')
        list.splice(0, 0, '+')
        list.splice(4, 0, '(')
        list.splice(7, 0, ')')
        list.splice(11, 0, '-')
        list.splice(14, 0, '-')
    }else{
        list.unshift('+')
        alert('Это не узбекский номер')
    }
    

    text.innerHTML = list.join('')
    
})