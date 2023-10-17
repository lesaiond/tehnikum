//Переменные
let userData = null

//Инпуты
let registrationInput = document.querySelector('.signup-name')
let loginInput = document.querySelector('.login-name')


//Кнопки
let registrationButton = document.getElementById('registrationBtn')
let loginButton = document.getElementById('loginBtn')


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
    const data = await sendRequest('user', 'GET', username)

    return data
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
