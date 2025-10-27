'use strict'

const tabela_periodica          = document.getElementById('tabela_periodica')

const checkbox_metais_alcalinos                 = document.getElementById('checkbox-metais-alcalinos')
const checkbox_semimetais                       = document.getElementById('checkbox-semimetais')
const checkbox_actinideos                       = document.getElementById('checkbox-actinideos')
const checkbox_metais_alcalinoterrosos          = document.getElementById('checkbox-metais-alcalinoterrosos')
const checkbox_ametais_reativos                 = document.getElementById('checkbox-ametais-reativos')
const checkbox_propriedades_desconhecidas       = document.getElementById('checkbox-propriedades-desconhecidas')
const checkbox_metais_de_transicao              = document.getElementById('checkbox-metais-de-transicao')
const checkbox_gases_nobres                     = document.getElementById('checkbox-gases-nobres')
const checkbox_metais_pos_transicao             = document.getElementById('checkbox-metais-pos-transicao')
const checkbox_lantanideos                      = document.getElementById('checkbox-lantanideos')
const div_search                                = document.getElementById('search')
const input_search                              = document.getElementById('searchInput')
const img_search                                = document.getElementById('searchImg')
const body                                      = document.getElementById('body')


checkbox_metais_alcalinos.addEventListener('change', function () {
    if (this.checked) {
        const elements_number = [4,12,20,38,56,88]
        let i = 0
        for(i = 0; i < elements_number.length; i++){
            tabela_periodica.children[elements_number[i]].style.backgroundColor = 'blue'
        }
    } else {
         const elements_number = [4,12,20,38,56,88]
        let i = 0
        for(i = 0; i < elements_number.length; i++){
            tabela_periodica.children[elements_number[i]].style.backgroundColor = '#FF1B1B'
        }
    }
})

checkbox_semimetais.addEventListener('change', function() {
    if(this.checked){
        const elements_number = [6,15,33,34,52,53]
        let i = 0
        for(i = 0; i < elements_number.length; i++){
            tabela_periodica.children[elements_number[i]].style.backgroundColor = 'blue'
        }
    } else {
        const elements_number = [6,15,33,34,52,53]
        let i = 0
        for(i = 0; i < elements_number.length; i++){
            tabela_periodica.children[elements_number[i]].style.backgroundColor = '#42CF71'
        }
    }
})

checkbox_actinideos.addEventListener('change', function () {
    if(this.checked){
        const elements_number = [58,59,60,61,62,63,64,65,66,67,68,69,70,71,72]
        let i = 0
        for(i = 0; i < elements_number.length; i++){
            tabela_periodica.children[elements_number[i]].style.backgroundColor = 'blue'
        }
    }else{
        const elements_number = [58,59,60,61,62,63,64,65,66,67,68,69,70,71,72]
        let i = 0
        for(i = 0; i < elements_number.length; i++){
            tabela_periodica.children[elements_number[i]].style.backgroundColor = '#1BFF58'
        }
    }
})

checkbox_metais_alcalinoterrosos.addEventListener('change', function () {
    if(this.checked){
        const elements_number = [5,13,21,39,57,89]
        let i = 0
        for(i = 0; i < elements_number.length; i++){
            tabela_periodica.children[elements_number[i]].style.backgroundColor = 'blue'
        }
    }else{
        const elements_number = [5,13,21,39,57,89]
        let i = 0
        for(i = 0; i < elements_number.length; i++){
            tabela_periodica.children[elements_number[i]].style.backgroundColor = '#FF8D1B'
        }
    }
})

checkbox_ametais_reativos.addEventListener('change', function () {
    if(this.checked){
        const elements_number = [2,7,8,9,10,16,17,18,35,36,54]
        let i = 0
        for(i = 0; i < elements_number.length; i++){
            tabela_periodica.children[elements_number[i]].style.backgroundColor = 'blue'
        }
    }else{
        const elements_number = [2,7,8,9,10,16,17,18,35,36,54]
        let i = 0
        for(i = 0; i < elements_number.length; i++){
            tabela_periodica.children[elements_number[i]].style.backgroundColor = '#AF46FF'
        }
    }
})

checkbox_propriedades_desconhecidas.addEventListener('change', function() {
    if(this.checked){
        const elements_number = [110,111,112,113,114,115,116,117,118,119]
        let i = 0
        for(i = 0; i < elements_number.length; i++){
            tabela_periodica.children[elements_number[i]].style.backgroundColor = 'blue'
        }
    } else {
        const elements_number = [110,111,112,113,114,115,116,117,118,119]
        let i = 0
        for(i = 0; i < elements_number.length; i++){
            tabela_periodica.children[elements_number[i]].style.backgroundColor = '#CDC3B9'
        }
    }
})

checkbox_metais_de_transicao.addEventListener('change', function() {
    if(this.checked){
        const elements_number = [22,23,24,25,26,27,28,29,30,31,40,41,42,43,44,45,46,47,48,49,73,74,75,76,77,78,79,80,81,105,106,107,108,109]
        let i = 0
        for(i = 0; i < elements_number.length; i++){
            tabela_periodica.children[elements_number[i]].style.backgroundColor = 'blue'
        }
    } else {
        const elements_number = [22,23,24,25,26,27,28,29,30,31,40,41,42,43,44,45,46,47,48,49,73,74,75,76,77,78,79,80,81,105,106,107,108,109]
        let i = 0
        for(i = 0; i < elements_number.length; i++){
            tabela_periodica.children[elements_number[i]].style.backgroundColor = '#FFDD1B'
        }
    }
})

checkbox_gases_nobres.addEventListener('change', function () {
    if(this.checked){
        const elements_number = [3,11,19,37,55,87]
        let i = 0
        for(i = 0; i < elements_number.length; i++){
            tabela_periodica.children[elements_number[i]].style.backgroundColor = 'blue'
        }
    } else {
        const elements_number = [3,11,19,37,55,87]
        let i = 0
        for(i = 0; i < elements_number.length; i++){
            tabela_periodica.children[elements_number[i]].style.backgroundColor = '#1BC2FF'
        }
    }
})

checkbox_metais_pos_transicao.addEventListener('change', function () {
    if(this.checked){
        const elements_number = [14,32,50,51,82,83,84,85,86]
        let i = 0
        for(i = 0; i < elements_number.length; i++){
            tabela_periodica.children[elements_number[i]].style.backgroundColor = 'blue'
        }
    } else {
        const elements_number = [14,32,50,51,82,83,84,85,86]
        let i = 0
        for(i = 0; i < elements_number.length; i++){
            tabela_periodica.children[elements_number[i]].style.backgroundColor = '#B2D225'
        }
    }
})

checkbox_lantanideos.addEventListener('change', function () {
    if(this.checked){
        const elements_number = [90,91,92,93,94,95,96,97,98,99,100,101,102,103,104]
        let i = 0
        for(i = 0; i < elements_number.length; i++){
            tabela_periodica.children[elements_number[i]].style.backgroundColor = 'blue'
        }
    } else {
        const elements_number = [90,91,92,93,94,95,96,97,98,99,100,101,102,103,104]
        let i = 0
        for(i = 0; i < elements_number.length; i++){
            tabela_periodica.children[elements_number[i]].style.backgroundColor = '#196262'
        }
    }
})

input_search.addEventListener('click', function () {
    let background = document.createElement('div')
    background.style.backgroundColor = 'rgba(0, 0, 0, 0.87)'
    background.style.height          = '100vh'
    background.style.width           = '100vw'
    background.style.position        = 'absolute'
    background.style.marginTop       = '-100vh'
    background.style.animation       = 'fadeIn 0.5s ease-out'
    body.appendChild(background)

    div_search.style.justifySelf  = 'center'
    div_search.style.zIndex       = '2'


    background.addEventListener('click', function () {
        body.removeChild(background)
    })
})