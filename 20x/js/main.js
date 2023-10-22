let btn = document.querySelector('.searchBtn')
let descriptions = document.getElementById('descriptions')
let movieImg = document.querySelector('.movieImg')
let listFavorie = []
let test = document.querySelector('.imgOne')
let i = 0
let favorities = document.querySelector('.favorities')
let updateFavoritiesList = document.getElementById('updateFavoritiesList')


// обработает запрос
async function searchByName() {
    const input = document.querySelector('#searchInput')
    if (input.value) {
        try {
            let url = `https://www.omdbapi.com/?t=${input.value}&apikey=6ddf134a`
            // console.log(input.value);
            let data = await fetch(url)
            data = await data.json()
            return addTag(data)
        } catch (error) {
            console.log('Ошибка при выполнении запроса:', error);
        }

    } else {
        input.placeholder = 'Введдите название кино'
        input.style.color = 'red'
        setTimeout(() => {
            input.style.color = '#bfbfbf'
        }, 1000)
        console.log("Введдите название кино");
    }
}
// добавляем всё к HTML
function addTag(data) {
    i++
    descriptions.innerHTML = ''
    movieImg.innerHTML = `
    <label for="chboxid${i}">
        <img src="${data.Poster}" class="poster" alt="">
        <input type="checkbox" class='favoriteChbox' id='chboxid${i}' onchange='addRemoveLocalStorage(${JSON.stringify(data)} , chboxid${i} , ${i})'>
    </label>
    `
    delete data.Production
    delete data.Ratings
    delete data.Website
    delete data.Metascore
    delete data.Response
    delete data.Year
    delete data.Rated
    // delete data.Poster
    for (let key in data) {
        let value = data[key];
        let result = descriptions.innerHTML += `
        <div class="description">
        <span class='keys'>${key}:</span>  
        <span class='value'>${value}</span>
        </div>
        `
    }
    return
}

function addRemoveLocalStorage(obj, chboxId, i) {
    // console.log(chboxId);
    let chbox = document.getElementById(chboxId.id)
    if (chbox.checked) {
        localStorage.setItem(chboxId.id, JSON.stringify(obj))
        // console.log(obj.title);
        console.log('add');
    } else {
        localStorage.removeItem(chboxId.id)
        console.log('removed');
    }
}

function addRemoveLocalStorage(obj, chboxId, i) {
    // console.log(chboxId);
    let chbox = document.getElementById(chboxId.id)
    if (chbox.checked) {

        localStorage.setItem(chboxId.id, JSON.stringify(obj))
        addFavorite(obj, chboxId, i)
    } else {
        localStorage.removeItem(`chboxid${i}`)
        console.log(`chboxid${i}`);
        document.querySelector(`.imgId${i}`).remove()
    }
}

function addFavorite(obj, chboxId, i) {
    let test = JSON.parse(localStorage.getItem(chboxId.id)).Poster
    favorities.innerHTML += `
        <img src='${test}' class='imgId${i}' onclick='removeFavority(${i})'>
    `

}

function removeFavority(i) {
    console.log(`chbox${i}`);
    document.querySelector(`.imgId${i}`).remove()
    localStorage.removeItem(`chboxid${i}`)
}

function clearFavBtn() {
    localStorage.clear()
    favorities.innerHTML = ''
}

function mainF() {
    console.log('good');
    for (let is = 1; is < 10; is++) {
        console.log('');
        // `
        if (localStorage.getItem(`chboxid${is}`) == null) {
            // console.log(123123);
        } else {
            let dowPhoto = localStorage.getItem(`chboxid${is}`)
            let a = JSON.parse(dowPhoto)
            console.log(a);
            favorities.innerHTML += `
                <img class='imgId${is}' src=${JSON.stringify(a.Poster)} onclick="removeFavority(${is})">
            `
        }
    }
}
mainF()