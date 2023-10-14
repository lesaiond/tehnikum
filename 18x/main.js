document.getElementById('addBtn').addEventListener('click' , addBtn)
let array = []


function addBtn(){
    let stdName = document.querySelector('.stdName').value
    let stdSureName = document.querySelector('.stdSureName').value
    let student_container = document.querySelector(".studentWrapper")
    
    let stdObj =  {
        stdName : stdName,
        stdSureName : stdSureName,
    }
    array.push(stdObj)
    let stdList = document.createElement('li')
    stdList.innerHTML = `Firstname : ${stdName} Surbname: ${stdSureName}`
    student_container.appendChild(stdList)
    let button = document.createElement('button')
    button.innerHTML = "delete"
    stdList.appendChild(button)
    button.addEventListener('click' , function deletStd(){
        stdList.remove()
    })
}
// 2.1
let cat = {
    name: 'Tom',
    age: '2'
}
console.log(cat);

// 2.2
let car = {
    company: 'Tesla',
    year : '2022'
}
console.log(car);

car.year = '2023'
console.log(car);

// 2.3
let book = {
    name: 'War & Peace',
    avtor: 'Lev Tolstoy',
    year: '1867 y.',
    Genre: 'Roman'
}
console.log(book);

// 2.4
let std = {
    name: 'David',
    age: '21',
    midBall: '2'
}
console.log(std);

// 2.5
let apple = {
    name: 'apple',
    color: 'red/green',
    flavour: 'sweet'
}

console.log(apple);