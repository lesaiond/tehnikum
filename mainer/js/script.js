//Переменные
let userData = null
let selectPoints = 0

//Инпуты
let registrationInput = document.querySelector('.signup-name')
let otherInput = document.querySelector('.other-input')
let loginInput = document.querySelector('.login-name')


//Кнопки
let registrationButton = document.getElementById('registrationBtn')
let loginButton = document.getElementById('loginBtn')
let gameButton = document.getElementById('gameButton')


//Блок
let userInfo = document.querySelector('.user-info')
let pointsBlock = document.querySelector('.points')

//Слушатели событий 
registrationButton.addEventListener('click', function () {
    console.log(registrationInput.value);
    if (registrationInput.value){
        registerUser(registrationInput.value)
    }
})

loginButton.addEventListener('click', function () {
    console.log('login data', loginInput.value);
    if(loginInput.value){
        loginUser(loginInput.value)
    }
})

pointsBlock.addEventListener('click', function(event){
    event.target.classList.toggle('active')

    if (event.target.innerHTML === 'Другое'){
        otherInput.classList.toggle('disabled')
        return
    }else{
        selectPoints = Number(event.target.innerHTML)
    }
})

otherInput.addEventListener('change' , function(event) {
    if(!!event.target.value){
        selectPoints = Number(event.target.value)
    }else{
        selectPoints = 0
    }
})

function renderUserInfo(userData){
    userInfo.innerHTML = `[Логин: ${userData.username}, Баланс: ${userData.balance}]`
}

async function registerUser(username){
    let payload = {
        username: username
    }

    const data = await sendRequest( 'user' ,'POST' , payload)
    console.log('data' , data);

    userData = {
        username: data.username,
        balance: data.balance,
    }

    return data
}

async function loginUser(username){
    try{
        const data = await sendRequest('user', 'GET', `username=${username}`)
        
        if(data.error){
            renderUserInfo('Неверный логин')
        }else{
            
            renderUserInfo(data)
        }

        return data
    }catch(err){
        throw err
    }
}

async function startGame(startGameData){
    try{
        const data = await sendRequest('new_game', ' POST', startGameData)

        return data
    }catch(error){
throw error
    }
}

async function selectField(selectFieldData){
    try{
        const data = await sendRequest('game_step', 'POST', selectFieldData)

        return data
    }catch(error){
        throw error
    }
}
async function finishGame(finishGameData){
    try{
        const data = await sendRequest('stop_game', 'POST', finishGameData)

        return data
    }catch(error){
        throw error
    }
}


async function sendRequest(url, method, data) {
    url = `https://tg-api.tehnikum.school/tehnikum_course/minesweeper/${url}`
    
    if(method == "POST") {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    
        response = await response.json()
        return response
    } else if(method == "GET") {
        url = url+"?"+ new URLSearchParams(data)
        let response = await fetch(url, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        response = await response.json()
        return response
    }
}

// function selectPoints() {
    
// }