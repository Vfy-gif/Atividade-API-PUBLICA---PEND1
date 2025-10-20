'use strict'

const tabela_periodica = document.getElementById('tabela_periodica')

async function getElements() {
    const url = 'https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json'
    const response = await fetch(url)
    const dados = await response.json()

    const elementos = dados.elements
    let i = 0

    while (i < 118) {
        let elemento = document.createElement('div')
        let numero_elemento = document.createElement('h1')
        let sigla_elemento = document.createElement('a')
        let nome_elemento = document.createElement('h2')
        let massa_elemento = document.createElement('h3')

        elemento.classList.add('elemento')

        if (elementos[i].group == 1) {
            elemento.classList.add('metais-alcalinos')
        }
        if (elementos[i].group == 2) {
            elemento.classList.add('metais-alcalinoterrosos')
        }
        if (elementos[i].group >= 3 && elementos[i].group <= 12) {
            if (elementos[i].number >= 21 && elementos[i].number <= 30 || elementos[i].number >= 39 && elementos[i].number <= 48 || elementos[i].number >= 72 && elementos[i].number <= 80 || elementos[i].number >= 104 && elementos[i].number <= 112) {
                elemento.classList.add('metais-de-transicao')
            }
            if(elementos[i].number >= 57 && elementos[i].number <= 71){
                elemento.classList.add('lantanideos')
            }
            if(elementos[i].number >= 89 && elementos[i].number <= 103){
                elemento.classList.add('actinideos')
            }
        }
        if(elementos[i].group == 13){
            if(elementos[i].number == 5){
                elemento.classList.add('semimetais')
            }
            if(elementos[i].number == 13 || elementos[i].number == 31 || elementos[i].number == 49 || elementos[i].number == 81){
                elemento.classList.add('metais-pos-transicao')
            }
            if(elementos[i].number == 113){
                elemento.classList.add('propriedades-desconhecidas')
            }
        }
        if(elementos[i].group == 14){
            if(elementos[i].number == 6){
                elemento.classList.add('ametais-reativos')
            }
            if(elementos[i].number == 14 || elementos[i].number == 32){
                elemento.classList.add('semimetais')
            }
            if(elementos[i].number == 50 || elementos[i].number == 82){
                elemento.classList.add('metais-pos-transicao')
            }
            if(elementos[i].number == 114){
                elemento.classList.add('propriedades-desconhecidas')
            }
        }
        if(elementos[i].group == 15){
            if(elementos[i].number == 7 || elementos[i].number == 15){
                elemento.classList.add('ametais-reativos')
            }
            if(elementos[i].number == 33 || elementos[i].number == 51){
                elemento.classList.add('semimetais')
            }
            if(elementos[i].number == 83){
                elemento.classList.add('metais-pos-transicao')
            }
            if(elementos[i].number == 115){
                elemento.classList.add('propriedades-desconhecidas')
            }
        }
        if(elementos[i].group == 16){
            if(elementos[i].number == 8 || elementos[i].number == 16 || elementos[i].number == 34){
                elemento.classList.add('ametais-reativos')
            }
            if(elementos[i].number == 52 || elementos[i].number == 84){
                elemento.classList.add('semimetais')
            }
            if(elementos[i].number == 116){
                elemento.classList.add('propriedades-desconhecidas')
            }
        }
        if(elementos[i].group == 17){
            if(elementos[i].number == 9 || elementos[i].number == 17 || elementos[i].number == 35 || elementos[i].number == 53){
                elemento.classList.add('ametais-reativos')
            }
            if(elementos[i].number == 85){
                elemento.classList.add('metais-pos-transicao')
            }
            if(elementos[i].number == 117){
                elemento.classList.add('propriedades-desconhecidas')
            }
        }
        if(elementos[i].group == 18){
            if(elementos[i].number == 2 || elementos[i].number == 10 || elementos[i].number == 18 || elementos[i].number == 36 || elementos[i].number == 54 || elementos[i].number == 86 ){
                elemento.classList.add('gases-nobres')
            }
            if(elementos[i].number == 118){
                elemento.classList.add('propriedades-desconhecidas')
            }
        }

        elemento.id = elementos[i].name
        numero_elemento.textContent = elementos[i].number
        sigla_elemento.textContent = elementos[i].symbol
        nome_elemento.textContent = elementos[i].name
        massa_elemento.textContent = elementos[i].atomic_mass

        tabela_periodica.appendChild(elemento)
        elemento.appendChild(numero_elemento)
        elemento.appendChild(sigla_elemento)
        elemento.appendChild(nome_elemento)
        elemento.appendChild(massa_elemento)
        i++
    }
}

getElements()
