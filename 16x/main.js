let before = document.querySelector('#before').value
let run = document.querySelector('#run')
let from = document.querySelector('#from').value 
let list = []
let workc = []
let worknc = []
let numP = []
let numM = []
let listc = []

run.addEventListener('click' , function(){
    console.log('Utility is run')   
    for(; +from <= +before; from++){
        
        list.push(from)

        // console.log(`from: ${from}`) 
//                          3 и 4
        let calc = from % 2
        if(from > 0){
            if(calc == 0){
                workc.push(from)
            }else{
                worknc.push(from)
            }
        }

//                           6 и 7
        if( +from > 0){
            numP.push(from)
        }else if(from < 0){
            numM.push(from)
        }else{
            // console.log('Возможно вас есть 0 в списке')
        }

        if(from == before){
            // console.log(`1. ${workP}`)
            break
        }else{
            if(from>1000){
                break
            }
        }

        
        
        for(let i = 0 ; i < list.length ; i += 2){
            listc.push(list[i])
        }
    }console.log(list)
    
    let plus = 0
    let multiply = 1
    for (let i = 0 ; i < list.length ; i++){
        plus += +list[i]
        multiply = +multiply * +list[i]
        
        if(i > 1000){
            break
        }
        
    }
    console.log(`сумма массива: ${plus}`)
    console.log(`произведение массива: ${multiply}`)
    console.log(`чётный числа: ${workc}`)
    console.log(`нечётный числа: ${worknc}`)
    console.log(`положительный числа: ${numP}`)
    console.log(`отрицательный числа: ${numM}`)
        list.push(list[0] + list[0]*20)
        list.push(list[0] + list[0]*50)
    console.log(`Массив увеличен: ${list}`)
        list.pop(list[2])
        list.pop(list[1])
        list.pop(list[0])
    console.log(`массив уменщен: ${list}`)
    console.log("Числа в чётных позициях: " + listc)
    console.log('stop utility')
})


