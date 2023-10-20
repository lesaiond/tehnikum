//Переменный
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
let input = document.querySelector('#input').value
let btn = document.querySelector('.btn')
let text = 'hulk'
let description = document.querySelector('#desctiptions')


async function result() {
    if (input) {
        url = `https://www.omdbapi.com/?t=${input}&apikey=6ddf134a`
        let a = await fetch(url)
        a = await a.json()
        addTag(a)
    } else {
        console.log("Введдите название кино");
    }
    return
}

function addTag(a) {
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
