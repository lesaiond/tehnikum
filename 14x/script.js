function sum(){
    let num1 = document.getElementsByClassName("number")[0].
    value
    let num2 = document.getElementsByClassName("number")[1].
    value
    let sum= Number(num1) + Number(num2)
    let result = document.querySelector(".result")
    result.innerHTML+=sum
}


function sum2(){
    let num1 = document.getElementsByClassName("number")[2].
    value
    let num2 = document.getElementsByClassName("number")[3].
    value
    let sumP= Number(num1) + Number(num2)
    let sum2 = Number(sumP) / Number(2)
    let result = document.querySelector(".result2")
    result.innerHTML+=sum2
}


function sum3(){
    let num1 = document.getElementsByClassName("number")[4].
    value
    let num2 = document.getElementsByClassName("number")[5].
    value
    let sumP= Number(num1) + Number(num2)
    let sumk = Number(sumP) / Number(2)
    let sum3 = Number(sumk) * Number(sumk)
    let result = document.querySelector(".result3")
    result.innerHTML+=sum3
}

function plus(){
    let calcN1 = document.getElementsByClassName("calcN")[0].value
    let calcN2 = document.getElementsByClassName("calcN")[1].value
    let plus = Number(calcN1) + Number(calcN2)
    let calc = document.getElementById("calc")
    calc.innerHTML+=plus
}
function minus(){
    let calcN1 = document.getElementsByClassName("calcN")[0].value
    let calcN2 = document.getElementsByClassName("calcN")[1].value
    let minus = Number(calcN1) - Number(calcN2)
    let calc = document.getElementById("calc")
    calc.innerHTML+= minus
}
function multiply(){ 
    calc.innerHTML = '';
    let calcN1 = document.getElementsByClassName("calcN")[0].value
    let calcN2 = document.getElementsByClassName("calcN")[1].value
    let multiply = Number(calcN1) * Number(calcN2)
    let calc = document.getElementById("calc")
    calc.innerHTML+=multiply
    break
}
function divide(){
    calc.innerHTML = '';
    let calcN1 = document.getElementsByClassName("calcN")[0].value
    let calcN2 = document.getElementsByClassName("calcN")[1].value
    let divide = Number(calcN1) / Number(calcN2)
    let calc = document.getElementById("calc")
    calc.innerHTML+=divide
}

$('.delete').on('click', function() {
	$('.number').html('');
    $('.calcN').html('');
});