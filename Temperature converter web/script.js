let celsiusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')

let btn = document.querySelector('.button button')

function roundNumber(number) {
    return Math.round(number * 100) / 100
}

/* Celcius to Fahrenheit */
btn.addEventListener('click', () => {
    let cTemp = parseFloat(celsiusInput.value)
    let fTemp = (cTemp * (9 / 5)) + 32

    fahrenheitInput.value = roundNumber(fTemp)
})

