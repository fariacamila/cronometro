let hora = 0
let minuto = 0
let segundo = 0
let intervalo

function inicio() {
    contador()
    intervalo = setInterval(contador, .90)
}

function pausar() {
    clearInterval(intervalo)
}

function parar() {
    clearInterval(intervalo)
    hora = 0
    minuto = 0
    segundo = 0

    document.querySelector('.relogio').innerText = `00:00:00`
}

function zerado(zero) {
    if (zero < 10) {
        return ('0' + zero)
    } else {
        return (zero)
    }
}

function contador() {
    segundo = segundo + 1
    if (segundo == 60) {
        minuto++
        segundo = 0

        if (minuto == 60) {
            hora++
            minuto = 0
        }
    }


    relogio = document.querySelector('.relogio').innerText = `${zerado(hora)}:${zerado(minuto)}:${zerado(segundo)}`
}