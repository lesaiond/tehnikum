//
let jokeText = document.getElementById('jokeText')


//Asynchronic

async function getChuckNorrisJoke() {
    try {
        url = `https://api.chucknorris.io/jokes/random`
        let response = await fetch(url)
        response = await response.json()
        return response.value
    } catch (err) {
        console.log(err, 'У вас ошибка)))')
    }
}

async function go() {
    let a = await getChuckNorrisJoke()
    console.log(a);
    jokeText.innerHTML = a
}