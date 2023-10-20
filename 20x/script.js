//Переменный
let inputTitle = document.querySelector('#inputTitle').value
let movieTitle = 'thor'
let title = document.querySelector('.title')
let money = document.querySelector('.money')
let year = document.querySelector('.year')
let runTime = document.querySelector('.runTime')
let genre = document.querySelector('.genre')
let director = document.querySelector('.director')
let languages = document.querySelector('.languages')
let country = document.querySelector('.country')
let actors = document.querySelector('.actors')
let poster = document.querySelector('.poster')
let main = document.querySelector('.main')

//Функции
async function go() {
    // console.log('is run');
    let a = await sendRequest()
    console.log(a);
    // console.log(year);
    async function appenTag() {
        main.classList.remove('active')
        poster.setAttribute('src', `${a.Poster}`)
        title.innerHTML = a.Title
        money.innerHTML = a.BoxOffice
        year.innerHTML = a.Year
        actors.innerHTML = a.Actors
        runTime.innerHTML = a.Runtime
        genre.innerHTML = a.Genre
        languages.innerHTML = a.Language
        country.innerHTML = a.Country
        director.innerHTML = a.Director
    }
    appenTag()
}

async function sendRequest() {
    url = `http://www.omdbapi.com/?i=tt3896198&apikey=fc639209`
    let response = await fetch(url, {
        method: 'POST',
        t: 'Hulk'
    }
    )
    response = await response.json()
    return response
}