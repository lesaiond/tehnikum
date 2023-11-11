// Переменные
let userData = null
let selectPoints = 0

// Инпуты
const registrationInput = document.querySelector('.signup-name')
const otherInput = document.querySelector('.other-input')
const loginInput = document.querySelector('.login-name')

// Кнопки
const registrationButton = document.getElementById('registrationBtn')
const loginButton = document.getElementById('loginBtn')
const fieldCells = document.querySelector('.cell')
const gameButton = document.getElementById('gameButton')

// Блок
const userInfo = document.querySelector('.user-info')
const pointsBlock = document.querySelector('.points')

// Слушатели событий
registrationButton.addEventListener('click', function () {
  console.log(registrationInput.value)
  if (registrationInput.value) {
    registerUser(registrationInput.value)
  }
})

loginButton.addEventListener('click', function () {
  console.log('login data', loginInput.value)
  if (loginInput.value) {
    loginUser(loginInput.value)
  }
})

pointsBlock.addEventListener('click', function (event) {
  for (let i = 0; i < pointsBlock.children.length; i++) {
    pointsBlock.children[i].classList.remove('active')
    otherInput.classList.add('disabled')
    otherInput.value = 0
  }

  event.target.classList.toggle('active')

  if (event.target.innerHTML === 'Другое') {
    otherInput.classList.toggle('disabled')
    return
  } else {
    selectPoints = Number(event.target.innerHTML)
  }

  toggleGameButton()
})

otherInput.addEventListener('change', function (event) {
  if (event.target.value) {
    selectPoints = Number(event.target.value)
  } else {
    selectPoints = 0
  }
  toggleGameButton()
})

gameButton.addEventListener('click', function (event) {
  event.target.innerHTML === 'Играть'
    ? (event.target.innerHTML = 'Завершить')
    : (event.target.innerHTML = 'Играть')
})

function renderUserInfo(userData) {
  userInfo.innerHTML = `[Логин: ${userData.username}, Баланс: ${userData.balance}]`
}

async function registerUser(username) {
  const payload = {
    username
  }

  const data = await sendRequest('user', 'POST', payload)
  console.log('data', data)

  userData = {
    username: data.username,
    balance: data.balance
  }

  return data
}

async function loginUser(username) {
  try {
    const data = await sendRequest('user', 'GET', `username=${username}`)

    if (data.error) {
      renderUserInfo('Неверный логин')
    } else {
      renderUserInfo(data)
      userData = {
        user: data.username,
        balance: data.balance
      }
    }

    return data
  } catch (err) {
    throw err
  }
}

async function startGame(startGameData) {
  try {
    const data = await sendRequest('new_game', ' POST', startGameData)

    return data
  } catch (error) {
    throw error
  }
}

async function selectField(selectFieldData) {
  try {
    const data = await sendRequest('game_step', 'POST', selectFieldData)

    return data
  } catch (error) {
    throw error
  }
}
async function finishGame(finishGameData) {
  try {
    const data = await sendRequest('stop_game', 'POST', finishGameData)

    return data
  } catch (error) {
    throw error
  }
}

async function sendRequest(url, method, data) {
  url = `https://tg-api.tehnikum.school/tehnikum_course/minesweeper/${url}`

  if (method == 'POST') {
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    response = await response.json()
    return response
  } else if (method == 'GET') {
    url = url + '?' + new URLSearchParams(data)
    let response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    response = await response.json()
    return response
  }
}

// function selectPoints() {

// }3

function activateFields() {
  fieldCells.forEach(element => element.classList.add('active'))
}

function resetFields() {
  fieldCells.forEach((element) => {
    element.classList.remove('active')
    element.classList.remove('flag')
    element.classList.remove('bomb')
    element.innerHTML = ''
  })
}

function toggleGameButton() {
  if (selectedPoints && userData.username) {
    gameButton.classList.remove('disabled-button')
  } else {
    gameButton.classList.add('disabled-button')
  }
}
