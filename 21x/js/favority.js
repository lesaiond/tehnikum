//
let fav = document.querySelector('.fav')
let container = document.querySelector('.container')
let hulk = {
    title: 'Hulk',
    year: '2007',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',
}
localStorage.setItem('movie1', JSON.stringify(hulk))


//
function go() {
    let move1 = JSON.parse(localStorage.getItem('movie1'))
    console.log(move1.poster);
    for (let i = 0; i < localStorage.length; i++) {
    container.innerHTML = `
    <img src="${hulk.poster}" class='imgOne' alt="" >
    <input type='checkbox' class='chbox' id='chboxid${i}' onchange='addRemoveLocalStorage(${JSON.stringify(hulk)} , chboxid${i} , ${i})'> 
    `
    }

    console.log('good');
}
go()



























// for (i = 0; i < localStorage.length; i++) {
//     // console.log(`chboxId${i}`);
// }