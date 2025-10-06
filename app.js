'use strict'

const tabela_periodica = document.getElementById('tabela_periodica')

async function getElements() {
    const url = 'https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json'
    const response = await fetch(url)
    const dados = await response.json()

    const elementos = dados.elements
    let i = 0

    while(i < 118){
        let elemento        = document.createElement('div')
        let numero_elemento = document.createElement('h1')
        let sigla_elemento  = document.createElement('a')
        let nome_elemento   = document.createElement('h2')
        let massa_elemento  = document.createElement('h3')

        elemento.classList.add('elemento')
        elemento.id                 = elementos[i].name
        numero_elemento.textContent = elementos[i].number
        sigla_elemento.textContent  = elementos[i].symbol
        nome_elemento.textContent   = elementos[i].name
        massa_elemento.textContent  = elementos[i].atomic_mass

        tabela_periodica.appendChild(elemento)
        elemento.appendChild(numero_elemento)
        elemento.appendChild(sigla_elemento)
        elemento.appendChild(nome_elemento)
        elemento.appendChild(massa_elemento)
        i++
    }
}

getElements()
