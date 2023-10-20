let input = document.querySelector('#input').value
let btn = document.querySelector('.btn')
let text = 'hulk'
let description = document.getElementById('descriptions')


async function result(){
    if(input){
        url = `https://www.omdbapi.com/?t=${input}&apikey=6ddf134a`
        let data = await fetch(url)
        data = await data.json()
        addTag(data)
    }else{
        console.log("Введдите название кино");
    }
    return 
}

function addTag(data){
    console.log(data);    
    description.innerHTML = `
    <img src='${data.Poster}'><img>
    <h2>${data.Title}</h2>
    <p>Год выпуска: ${data.Year}</p>
    <p>Режиссер: ${data.Director}</p>
    <p>Номинации: ${data.Awards}</p>
    <p>Страна: ${data.Country}</p>
    <p>Жанр: ${data.Genre}</p>
    <p>Язык: ${data.Language}</p>
    <p>Plot: ${data.Plot}</p>
    <p>Год: ${data.Year}</p>
    <p>Оценка IMDB: ${data.imdbRating}</p>
`;
}