let btn = document.querySelector('.searchBtn')
let descriptions = document.getElementById('descriptions')
let movieImg = document.querySelector('.movieImg')
let listFavorie = []
let test = document.querySelector('.imgOne')
let i = 0
let favorities = document.querySelector('.favorities')
let updateFavoritiesList = document.getElementById('updateFavoritiesList')
let themeBtn = document.querySelector('.themeBtn')
let sun  = document.querySelector('.sun')
let moon = document.querySelector('.moon')
let theme = document.querySelector('.darkMode')


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
    <div class='container'>
    <input type="checkbox" class='favoriteChbox' id='chboxid${i}' onchange='addRemoveLocalStorage(${JSON.stringify(data)} , chboxid${i} , ${i})'>
    <svg height="24px" id="Layer_1" version="1.2" viewBox="0 0 24 24" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"></path></g></g></svg>
    </div>
        <img src="${data.Poster}" class="poster" alt="">
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
        <img src='${test}' class='imgId${i} galleryMovie' onclick='removeFavority(${i})'>
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
    console.log( localStorage.getItem('theme') == 'dark');
    if(localStorage.getItem('theme') == 'dark'){
        addRemoveClass(sun , moon , 'themeBtn')
        theme.href = ''
    }else{
        theme.href = 'dark.css'
        addRemoveClass( moon, sun , 'themeBtn')
    }
        
    for (let is = 1; is < 10; is++) {
        if (localStorage.getItem(`chboxid${is}`) == null) {
        } else {
            let dowPhoto = localStorage.getItem(`chboxid${is}`)
            let a = JSON.parse(dowPhoto)
            favorities.innerHTML += `
                <img class='imgId${is} galleryMovie' src=${JSON.stringify(a.Poster)} onclick="removeFavority(${is})">
            `
        }
    }
}

function themeChange(){
    if(themeBtn.checked){
        console.log('checked');
        localStorage.setItem('theme' , 'dark')
        addRemoveClass(sun , moon , 'themeBtn')
        theme.href = ''
    }else{
        localStorage.setItem('theme' , 'light')
        addRemoveClass( moon, sun , 'themeBtn')
        console.log('unchecked');
        theme.href = 'dark.css'
    }
}

function addRemoveClass(addClassTag , removeClassTag , clas){
    addClassTag.classList.add(clas)
    removeClassTag.classList.remove(clas)
}

mainF()