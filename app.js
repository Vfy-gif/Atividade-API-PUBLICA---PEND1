'use strict'

const tabela_periodica = document.getElementById('tabela_periodica')
const checkbox_metais_alcalinos = document.getElementById('checkbox-metais-alcalinos')
const checkbox_semimetais = document.getElementById('checkbox-semimetais')
const checkbox_actinideos = document.getElementById('checkbox-actinideos')
const checkbox_metais_alcalinoterrosos = document.getElementById('checkbox-metais-alcalinoterrosos')
const checkbox_ametais_reativos = document.getElementById('checkbox-ametais-reativos')
const checkbox_propriedades_desconhecidas = document.getElementById('checkbox-propriedades-desconhecidas')
const checkbox_metais_de_transicao = document.getElementById('checkbox-metais-de-transicao')
const checkbox_gases_nobres = document.getElementById('checkbox-gases-nobres')
const checkbox_metais_pos_transicao = document.getElementById('checkbox-metais-pos-transicao')
const checkbox_lantanideos = document.getElementById('checkbox-lantanideos')
const checkbox_element_counts = document.getElementById('checkbox-element-counts')
const div_search = document.getElementById('search')
const input_search = document.getElementById('searchInput')
const img_search = document.getElementById('searchImg')
const element_counts = document.getElementById('element-counts')
const body = document.getElementById('body')

// Const feita devido a falhas no github

async function iniciarAplicacao() {

    const dados = await getElements()
    const elementos = dados.elements

    const metais_alcalinos = [4, 12, 20, 38, 56, 88]
    const semimetais = [6, 15, 33, 34, 52, 53]
    const actinideos = [58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72]
    const metais_alcalinoterrosos = [5, 13, 21, 39, 57, 89]
    const ametais_reativos = [2, 7, 8, 9, 10, 16, 17, 18, 35, 36, 54]
    const propriedades_desconhecidas = [110, 111, 112, 113, 114, 115, 116, 117, 118, 119]
    const metais_de_transicao = [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 73, 74, 75, 76, 77, 78, 79, 80, 81, 105, 106, 107, 108, 109]
    const gases_nobres = [3, 11, 19, 37, 55, 87]
    const metais_pos_transicao = [14, 32, 50, 51, 82, 83, 84, 85, 86]
    const lantanideos = [90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104]

    checkbox_metais_alcalinos.addEventListener('change', function () {
        if (this.checked) {
            let i = 0
            for (i = 0; i < metais_alcalinos.length; i++) {
                tabela_periodica.children[metais_alcalinos[i]].style.backgroundColor = 'blue'
            }
        } else {
            let i = 0
            for (i = 0; i < metais_alcalinos.length; i++) {
                tabela_periodica.children[metais_alcalinos[i]].style.backgroundColor = '#FF1B1B'
            }
        }
    })

    checkbox_semimetais.addEventListener('change', function () {
        if (this.checked) {
            let i = 0
            for (i = 0; i < semimetais.length; i++) {
                tabela_periodica.children[semimetais[i]].style.backgroundColor = 'blue'
            }
        } else {
            let i = 0
            for (i = 0; i < semimetais.length; i++) {
                tabela_periodica.children[semimetais[i]].style.backgroundColor = '#42CF71'
            }
        }
    })

    checkbox_actinideos.addEventListener('change', function () {
        if (this.checked) {
            let i = 0
            for (i = 0; i < actinideos.length; i++) {
                tabela_periodica.children[actinideos[i]].style.backgroundColor = 'blue'
            }
        } else {
            let i = 0
            for (i = 0; i < actinideos.length; i++) {
                tabela_periodica.children[actinideos[i]].style.backgroundColor = '#1BFF58'
            }
        }
    })

    checkbox_metais_alcalinoterrosos.addEventListener('change', function () {
        if (this.checked) {
            let i = 0
            for (i = 0; i < metais_alcalinoterrosos.length; i++) {
                tabela_periodica.children[metais_alcalinoterrosos[i]].style.backgroundColor = 'blue'
            }
        } else {
            let i = 0
            for (i = 0; i < metais_alcalinoterrosos.length; i++) {
                tabela_periodica.children[metais_alcalinoterrosos[i]].style.backgroundColor = '#FF8D1B'
            }
        }
    })

    checkbox_ametais_reativos.addEventListener('change', function () {
        if (this.checked) {
            let i = 0
            for (i = 0; i < ametais_reativos.length; i++) {
                tabela_periodica.children[ametais_reativos[i]].style.backgroundColor = 'blue'
            }
        } else {
            let i = 0
            for (i = 0; i < ametais_reativos.length; i++) {
                tabela_periodica.children[ametais_reativos[i]].style.backgroundColor = '#AF46FF'
            }
        }
    })

    checkbox_propriedades_desconhecidas.addEventListener('change', function () {
        if (this.checked) {
            let i = 0
            for (i = 0; i < propriedades_desconhecidas.length; i++) {
                tabela_periodica.children[propriedades_desconhecidas[i]].style.backgroundColor = 'blue'
            }
        } else {
            let i = 0
            for (i = 0; i < propriedades_desconhecidas.length; i++) {
                tabela_periodica.children[propriedades_desconhecidas[i]].style.backgroundColor = '#CDC3B9'
            }
        }
    })

    checkbox_metais_de_transicao.addEventListener('change', function () {
        if (this.checked) {
            let i = 0
            for (i = 0; i < metais_de_transicao.length; i++) {
                tabela_periodica.children[metais_de_transicao[i]].style.backgroundColor = 'blue'
            }
        } else {
            let i = 0
            for (i = 0; i < metais_de_transicao.length; i++) {
                tabela_periodica.children[metais_de_transicao[i]].style.backgroundColor = '#FFDD1B'
            }
        }
    })

    checkbox_gases_nobres.addEventListener('change', function () {
        if (this.checked) {
            let i = 0
            for (i = 0; i < gases_nobres.length; i++) {
                tabela_periodica.children[gases_nobres[i]].style.backgroundColor = 'blue'
            }
        } else {
            let i = 0
            for (i = 0; i < gases_nobres.length; i++) {
                tabela_periodica.children[gases_nobres[i]].style.backgroundColor = '#1BC2FF'
            }
        }
    })

    checkbox_metais_pos_transicao.addEventListener('change', function () {
        if (this.checked) {
            let i = 0
            for (i = 0; i < metais_pos_transicao.length; i++) {
                tabela_periodica.children[metais_pos_transicao[i]].style.backgroundColor = 'blue'
            }
        } else {
            let i = 0
            for (i = 0; i < metais_pos_transicao.length; i++) {
                tabela_periodica.children[metais_pos_transicao[i]].style.backgroundColor = '#B2D225'
            }
        }
    })

    checkbox_lantanideos.addEventListener('change', function () {
        if (this.checked) {
            let i = 0
            for (i = 0; i < lantanideos.length; i++) {
                tabela_periodica.children[lantanideos[i]].style.backgroundColor = 'blue'
            }
        } else {
            let i = 0
            for (i = 0; i < lantanideos.length; i++) {
                tabela_periodica.children[lantanideos[i]].style.backgroundColor = '#196262'
            }
        }
    })

    let verify = 0;

    input_search.addEventListener('click', function () {

        if (verify == 0) {

            verify = 1;
            let background = document.createElement('div')

            background.style.backgroundColor = 'rgba(0, 0, 0, 0.87)'
            background.style.height = '100vh'
            background.style.width = '100vw'
            background.style.position = 'fixed'
            background.style.top = '0'
            background.style.left = '0'
            background.style.animation = 'fadeIn 0.5s ease-out'
            background.style.justifyContent = 'center'
            background.style.alignItems = 'center'
            background.style.display = 'flex'
            background.style.flexDirection = 'column'


            div_search.classList.add('div-search-click')



            input_search.style.fontSize = '30px'
            input_search.style.width = '90%'
            div_search.style.transition = '1s'

            let listElements = document.createElement('div')
            listElements.style.height = '76vh'
            listElements.style.width = '73vw'
            listElements.style.alignItems = 'center'
            listElements.style.justifyContent = 'center'
            listElements.style.overflow = 'auto'
            listElements.style.marginTop = '25vh'
            listElements.classList.add('barra-de-pesquisa')
            listElements.classList.add('elemento-arrastavel')
            listElements.id = 'listElements'

            body.appendChild(background)
            background.appendChild(listElements)

            let i = 0
            while (i < 118) {
                let elemento = document.createElement('div')
                let elemento_nome = document.createElement('h1')
                let elemento_imagem = document.createElement('img')

                elemento.style.backgroundColor = '#8B8686'
                elemento.style.display = 'flex'
                elemento.style.height = '25%'
                elemento.style.width = '100%'
                elemento.style.margin = '10px 0px'
                elemento.style.justifyContent = 'left'
                elemento.style.alignItems = 'center'
                elemento.style.fontFamily = '"Inter", sans-serif'
                elemento.classList.add('temp-element')

                elemento_nome.style.fontWeight = '100'
                elemento_nome.style.fontSize = '100px'
                elemento_nome.style.color = 'rgba(0, 0, 0, 0.72)'

                elemento_imagem.style.height = '90%'
                elemento_imagem.style.borderRadius = '20px'
                elemento_imagem.style.marginLeft = '59px'


                elemento.id = elementos[i].name
                elemento_nome.textContent = elementos[i].name
                elemento_imagem.src = elementos[i].bohr_model_image

                listElements.appendChild(elemento)
                elemento.appendChild(elemento_imagem)
                elemento.appendChild(elemento_nome)

                elemento.addEventListener('click', function (event) {
                    event.stopPropagation();

                    if (!elemento.classList.contains('element-select')) {
                        const todosOsElementos = listElements.querySelectorAll('.temp-element');
                        todosOsElementos.forEach(outroElemento => {
                            if (outroElemento !== elemento) {
                                outroElemento.style.display = 'none';
                            }
                        });

                        elemento.classList.add('element-select');


                        let container = document.createElement('div')
                        elemento.style.transition = '1s'
                        elemento.style.justifyContent = 'center'
                        elemento.style.height = '90%'
                        elemento.style.position = 'relative'

                        container.style.display = 'grid'
                        container.style.alignItems = 'center'
                        container.style.justifyContent = 'center'
                        container.style.placeItems = 'center'
                        container.style.width = '80%'

                        elemento_nome.style.marginLeft = '50px'

                        elemento_imagem.style.height = '297px'
                        elemento_imagem.style.width = '487px'


                        let exit_element = document.createElement('div')
                        let exit_image = document.createElement('img')

                        exit_image.src = './img/weui_arrow-filled.svg'
                        exit_image.style.height = '100%'
                        exit_image.style.width = '100%'
                        exit_image.style.objectFit = 'cover'

                        exit_element.style.height = '93px'
                        exit_element.style.width = '43px'
                        exit_element.style.position = 'absolute'
                        exit_element.style.top = '30px'
                        exit_element.style.left = '50px'

                        exit_element.appendChild(exit_image)

                        exit_element.addEventListener('click', function (event) {

                            event.stopPropagation();
                            todosOsElementos.forEach(outroElemento => {
                                if (outroElemento !== elemento) {
                                    outroElemento.style.display = 'flex'
                                }
                            })

                            elemento.appendChild(elemento_imagem)
                            elemento.appendChild(elemento_nome)


                            exit_element.remove();
                            container.remove()

                            elemento.classList.remove('element-select')
                            elemento.style.transition = '0.8s'
                            elemento.style.justifyContent = 'left'
                            elemento.style.height = '25%'
                            elemento.style.position = 'static'

                            elemento_imagem.style.height = '90%'
                            elemento_imagem.style.width = ''
                            elemento_imagem.style.marginLeft = '59px'

                            elemento_nome.style.marginLeft = ''
                        })


                        elemento.appendChild(exit_element)
                        elemento.appendChild(container)
                        container.appendChild(elemento_imagem)
                        container.appendChild(elemento_nome)

                        let i = 0
                        while (i < 118) {
                            if (elementos[i].name == elemento_nome.textContent) {
                                let elemento_descricao = document.createElement('h1')
                                elemento_descricao.textContent = elementos[i].summary
                                container.appendChild(elemento_descricao)
                            }
                            i++
                        }
                    }
                })
                i++
            }

            background.addEventListener('click', function () {
                body.removeChild(background)
                div_search.classList.remove('div-search-click')
                input_search.style.fontSize = '15px'
                input_search.style.width = '80%'
                verify = 0;
            })
        }
    })
}
async function getElements() {
    const url = 'https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json'
    const response = await fetch(url)
    const dados = await response.json()

    return dados
}
async function InserirElemento() {
    const campo_inserido = document.getElementById('searchInput').value.toLowerCase().replace(/ /g, '').replace(/-/g, '')
    let listElements = document.getElementById('listElements')
    listElements.replaceChildren()

    const dados = await getElements()
    const elementos = dados.elements

    for (let i = 0; i < 118; i++) {
        let NomeElementos = elementos[i].name
        if (NomeElementos.toLowerCase() == campo_inserido) {
            let elemento = document.createElement('div')
            let elemento_nome = document.createElement('h1')
            let elemento_imagem = document.createElement('img')
            elemento.id = elementos[i].name
            elemento_nome.textContent = elementos[i].name
            elemento_imagem.src = elementos[i].bohr_model_image

            elemento.style.backgroundColor = '#8B8686'
            elemento.style.display = 'flex'
            elemento.style.height = '25%'
            elemento.style.width = '100%'
            elemento.style.margin = '10px 0px'
            elemento.style.justifyContent = 'left'
            elemento.style.alignItems = 'center'
            elemento.style.fontFamily = '"Inter", sans-serif'
            elemento.classList.add('temp-element')

            elemento_nome.style.fontWeight = '100'
            elemento_nome.style.fontSize = '100px'
            elemento_nome.style.color = 'rgba(0, 0, 0, 0.72)'

            elemento_imagem.style.height = '90%'
            elemento_imagem.style.borderRadius = '20px'
            elemento_imagem.style.marginLeft = '59px'

            listElements.appendChild(elemento)
            elemento.appendChild(elemento_imagem)
            elemento.appendChild(elemento_nome)
        }
    }

    const metais_alcalinos = [4, 12, 20, 38, 56, 88]
    const semimetais = [6, 15, 33, 34, 52, 53]
    const actinideos = [58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72]
    const metais_alcalinoterrosos = [5, 13, 21, 39, 57, 89]
    const ametais_reativos = [2, 7, 8, 9, 10, 16, 17, 18, 35, 36, 54]
    const propriedades_desconhecidas = [110, 111, 112, 113, 114, 115, 116, 117, 118, 119]
    const metais_de_transicao = [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 73, 74, 75, 76, 77, 78, 79, 80, 81, 105, 106, 107, 108, 109]
    const gases_nobres = [3, 11, 19, 37, 55, 87]
    const metais_pos_transicao = [14, 32, 50, 51, 82, 83, 84, 85, 86]
    const lantanideos = [90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104]
    let i = 0
    if (campo_inserido == 'metaisalcalinos' || campo_inserido == 'alkalimetals') {
        while (i < metais_alcalinos.length) {
            let elemento = document.createElement('div')
            let elemento_nome = document.createElement('h1')
            let elemento_imagem = document.createElement('img')
            elemento.id = elementos[metais_alcalinos[i] - 2].name
            elemento_nome.textContent = elementos[metais_alcalinos[i] - 2].name
            elemento_imagem.src = elementos[metais_alcalinos[i] - 2].bohr_model_image

            elemento.style.backgroundColor = '#8B8686'
            elemento.style.display = 'flex'
            elemento.style.height = '25%'
            elemento.style.width = '100%'
            elemento.style.margin = '10px 0px'
            elemento.style.justifyContent = 'left'
            elemento.style.alignItems = 'center'
            elemento.style.fontFamily = '"Inter", sans-serif'
            elemento.classList.add('temp-element')

            elemento_nome.style.fontWeight = '100'
            elemento_nome.style.fontSize = '100px'
            elemento_nome.style.color = 'rgba(0, 0, 0, 0.72)'

            elemento_imagem.style.height = '90%'
            elemento_imagem.style.borderRadius = '20px'
            elemento_imagem.style.marginLeft = '59px'

            listElements.appendChild(elemento)
            elemento.appendChild(elemento_imagem)
            elemento.appendChild(elemento_nome)
            i++
        }
    }
    if (campo_inserido == 'semimetais' || campo_inserido == 'semimetals') {
        while (i < semimetais.length) {
            let elemento = document.createElement('div')
            let elemento_nome = document.createElement('h1')
            let elemento_imagem = document.createElement('img')
            elemento.id = elementos[semimetais[i] - 2].name
            elemento_nome.textContent = elementos[semimetais[i] - 2].name
            elemento_imagem.src = elementos[semimetais[i] - 2].bohr_model_image

            elemento.style.backgroundColor = '#8B8686'
            elemento.style.display = 'flex'
            elemento.style.height = '25%'
            elemento.style.width = '100%'
            elemento.style.margin = '10px 0px'
            elemento.style.justifyContent = 'left'
            elemento.style.alignItems = 'center'
            elemento.style.fontFamily = '"Inter", sans-serif'
            elemento.classList.add('temp-element')

            elemento_nome.style.fontWeight = '100'
            elemento_nome.style.fontSize = '100px'
            elemento_nome.style.color = 'rgba(0, 0, 0, 0.72)'

            elemento_imagem.style.height = '90%'
            elemento_imagem.style.borderRadius = '20px'
            elemento_imagem.style.marginLeft = '59px'

            listElements.appendChild(elemento)
            elemento.appendChild(elemento_imagem)
            elemento.appendChild(elemento_nome)
            i++
        }
    }
    if (campo_inserido == 'actinideos' || campo_inserido == 'actinídeos' || campo_inserido == 'actinides') {
        while (i < actinideos.length) {
            let elemento = document.createElement('div')
            let elemento_nome = document.createElement('h1')
            let elemento_imagem = document.createElement('img')
            elemento.id = elementos[actinideos[i] - 2].name
            elemento_nome.textContent = elementos[actinideos[i] - 2].name
            elemento_imagem.src = elementos[actinideos[i] - 2].bohr_model_image

            elemento.style.backgroundColor = '#8B8686'
            elemento.style.display = 'flex'
            elemento.style.height = '25%'
            elemento.style.width = '100%'
            elemento.style.margin = '10px 0px'
            elemento.style.justifyContent = 'left'
            elemento.style.alignItems = 'center'
            elemento.style.fontFamily = '"Inter", sans-serif'
            elemento.classList.add('temp-element')

            elemento_nome.style.fontWeight = '100'
            elemento_nome.style.fontSize = '100px'
            elemento_nome.style.color = 'rgba(0, 0, 0, 0.72)'

            elemento_imagem.style.height = '90%'
            elemento_imagem.style.borderRadius = '20px'
            elemento_imagem.style.marginLeft = '59px'

            listElements.appendChild(elemento)
            elemento.appendChild(elemento_imagem)
            elemento.appendChild(elemento_nome)
            i++
        }
    }
    if (campo_inserido == 'metaisalcalinoterrosos' || campo_inserido == 'Alkalineearthmetals') {
        while (i < metais_alcalinoterrosos.length) {
            let elemento = document.createElement('div')
            let elemento_nome = document.createElement('h1')
            let elemento_imagem = document.createElement('img')
            elemento.id = elementos[metais_alcalinoterrosos[i] - 2].name
            elemento_nome.textContent = elementos[metais_alcalinoterrosos[i] - 2].name
            elemento_imagem.src = elementos[metais_alcalinoterrosos[i] - 2].bohr_model_image

            elemento.style.backgroundColor = '#8B8686'
            elemento.style.display = 'flex'
            elemento.style.height = '25%'
            elemento.style.width = '100%'
            elemento.style.margin = '10px 0px'
            elemento.style.justifyContent = 'left'
            elemento.style.alignItems = 'center'
            elemento.style.fontFamily = '"Inter", sans-serif'
            elemento.classList.add('temp-element')

            elemento_nome.style.fontWeight = '100'
            elemento_nome.style.fontSize = '100px'
            elemento_nome.style.color = 'rgba(0, 0, 0, 0.72)'

            elemento_imagem.style.height = '90%'
            elemento_imagem.style.borderRadius = '20px'
            elemento_imagem.style.marginLeft = '59px'

            listElements.appendChild(elemento)
            elemento.appendChild(elemento_imagem)
            elemento.appendChild(elemento_nome)
            i++
        }
    }
    if (campo_inserido == 'ametaisreativos' || campo_inserido == 'nonmetals' || campo_inserido == 'reactivenonmetals') {
        while (i < ametais_reativos.length) {
            let elemento = document.createElement('div')
            let elemento_nome = document.createElement('h1')
            let elemento_imagem = document.createElement('img')
            elemento.id = elementos[ametais_reativos[i] - 2].name
            elemento_nome.textContent = elementos[ametais_reativos[i] - 2].name
            elemento_imagem.src = elementos[ametais_reativos[i] - 2].bohr_model_image

            elemento.style.backgroundColor = '#8B8686'
            elemento.style.display = 'flex'
            elemento.style.height = '25%'
            elemento.style.width = '100%'
            elemento.style.margin = '10px 0px'
            elemento.style.justifyContent = 'left'
            elemento.style.alignItems = 'center'
            elemento.style.fontFamily = '"Inter", sans-serif'
            elemento.classList.add('temp-element')

            elemento_nome.style.fontWeight = '100'
            elemento_nome.style.fontSize = '100px'
            elemento_nome.style.color = 'rgba(0, 0, 0, 0.72)'

            elemento_imagem.style.height = '90%'
            elemento_imagem.style.borderRadius = '20px'
            elemento_imagem.style.marginLeft = '59px'

            listElements.appendChild(elemento)
            elemento.appendChild(elemento_imagem)
            elemento.appendChild(elemento_nome)
            i++
        }
    }
    if (campo_inserido == 'propriedadesdesconhecidas' || campo_inserido == 'unknownproperties') {
        while (i < propriedades_desconhecidas.length) {
            let elemento = document.createElement('div')
            let elemento_nome = document.createElement('h1')
            let elemento_imagem = document.createElement('img')
            elemento.id = elementos[propriedades_desconhecidas[i] - 2].name
            elemento_nome.textContent = elementos[propriedades_desconhecidas[i] - 2].name
            elemento_imagem.src = elementos[propriedades_desconhecidas[i] - 2].bohr_model_image

            elemento.style.backgroundColor = '#8B8686'
            elemento.style.display = 'flex'
            elemento.style.height = '25%'
            elemento.style.width = '100%'
            elemento.style.margin = '10px 0px'
            elemento.style.justifyContent = 'left'
            elemento.style.alignItems = 'center'
            elemento.style.fontFamily = '"Inter", sans-serif'
            elemento.classList.add('temp-element')

            elemento_nome.style.fontWeight = '100'
            elemento_nome.style.fontSize = '100px'
            elemento_nome.style.color = 'rgba(0, 0, 0, 0.72)'

            elemento_imagem.style.height = '90%'
            elemento_imagem.style.borderRadius = '20px'
            elemento_imagem.style.marginLeft = '59px'

            listElements.appendChild(elemento)
            elemento.appendChild(elemento_imagem)
            elemento.appendChild(elemento_nome)
            i++
        }
    }
    if (campo_inserido == 'metaisdetransicao' || campo_inserido == 'transitionmetals') {
        while (i < metais_de_transicao.length) {
            let elemento = document.createElement('div')
            let elemento_nome = document.createElement('h1')
            let elemento_imagem = document.createElement('img')
            elemento.id = elementos[metais_de_transicao[i] - 2].name
            elemento_nome.textContent = elementos[metais_de_transicao[i] - 2].name
            elemento_imagem.src = elementos[metais_de_transicao[i] - 2].bohr_model_image

            elemento.style.backgroundColor = '#8B8686'
            elemento.style.display = 'flex'
            elemento.style.height = '25%'
            elemento.style.width = '100%'
            elemento.style.margin = '10px 0px'
            elemento.style.justifyContent = 'left'
            elemento.style.alignItems = 'center'
            elemento.style.fontFamily = '"Inter", sans-serif'
            elemento.classList.add('temp-element')

            elemento_nome.style.fontWeight = '100'
            elemento_nome.style.fontSize = '100px'
            elemento_nome.style.color = 'rgba(0, 0, 0, 0.72)'

            elemento_imagem.style.height = '90%'
            elemento_imagem.style.borderRadius = '20px'
            elemento_imagem.style.marginLeft = '59px'

            listElements.appendChild(elemento)
            elemento.appendChild(elemento_imagem)
            elemento.appendChild(elemento_nome)
            i++
        }
    }
    if (campo_inserido == 'gasesnobres' || campo_inserido == 'noblegases') {
        while (i < gases_nobres.length) {
            let elemento = document.createElement('div')
            let elemento_nome = document.createElement('h1')
            let elemento_imagem = document.createElement('img')
            elemento.id = elementos[gases_nobres[i] - 2].name
            elemento_nome.textContent = elementos[gases_nobres[i] - 2].name
            elemento_imagem.src = elementos[gases_nobres[i] - 2].bohr_model_image

            elemento.style.backgroundColor = '#8B8686'
            elemento.style.display = 'flex'
            elemento.style.height = '25%'
            elemento.style.width = '100%'
            elemento.style.margin = '10px 0px'
            elemento.style.justifyContent = 'left'
            elemento.style.alignItems = 'center'
            elemento.style.fontFamily = '"Inter", sans-serif'
            elemento.classList.add('temp-element')

            elemento_nome.style.fontWeight = '100'
            elemento_nome.style.fontSize = '100px'
            elemento_nome.style.color = 'rgba(0, 0, 0, 0.72)'

            elemento_imagem.style.height = '90%'
            elemento_imagem.style.borderRadius = '20px'
            elemento_imagem.style.marginLeft = '59px'

            listElements.appendChild(elemento)
            elemento.appendChild(elemento_imagem)
            elemento.appendChild(elemento_nome)
            i++
        }
    }
    if (campo_inserido == 'metaispostransicao' || campo_inserido == 'metaispóstransicao' || campo_inserido == 'posttransitionmetals') {
        while (i < metais_pos_transicao.length) {
            let elemento = document.createElement('div')
            let elemento_nome = document.createElement('h1')
            let elemento_imagem = document.createElement('img')
            elemento.id = elementos[metais_pos_transicao[i] - 2].name
            elemento_nome.textContent = elementos[metais_pos_transicao[i] - 2].name
            elemento_imagem.src = elementos[metais_pos_transicao[i] - 2].bohr_model_image

            elemento.style.backgroundColor = '#8B8686'
            elemento.style.display = 'flex'
            elemento.style.height = '25%'
            elemento.style.width = '100%'
            elemento.style.margin = '10px 0px'
            elemento.style.justifyContent = 'left'
            elemento.style.alignItems = 'center'
            elemento.style.fontFamily = '"Inter", sans-serif'
            elemento.classList.add('temp-element')

            elemento_nome.style.fontWeight = '100'
            elemento_nome.style.fontSize = '100px'
            elemento_nome.style.color = 'rgba(0, 0, 0, 0.72)'

            elemento_imagem.style.height = '90%'
            elemento_imagem.style.borderRadius = '20px'
            elemento_imagem.style.marginLeft = '59px'

            listElements.appendChild(elemento)
            elemento.appendChild(elemento_imagem)
            elemento.appendChild(elemento_nome)
            i++
        }
    }
    if (campo_inserido == 'lantanideos' || campo_inserido == 'lantanídeos' || campo_inserido == 'lanthanides') {
        while (i < lantanideos.length) {
            let elemento = document.createElement('div')
            let elemento_nome = document.createElement('h1')
            let elemento_imagem = document.createElement('img')
            elemento.id = elementos[lantanideos[i] - 2].name
            elemento_nome.textContent = elementos[lantanideos[i] - 2].name
            elemento_imagem.src = elementos[lantanideos[i] - 2].bohr_model_image

            elemento.style.backgroundColor = '#8B8686'
            elemento.style.display = 'flex'
            elemento.style.height = '25%'
            elemento.style.width = '100%'
            elemento.style.margin = '10px 0px'
            elemento.style.justifyContent = 'left'
            elemento.style.alignItems = 'center'
            elemento.style.fontFamily = '"Inter", sans-serif'
            elemento.classList.add('temp-element')

            elemento_nome.style.fontWeight = '100'
            elemento_nome.style.fontSize = '100px'
            elemento_nome.style.color = 'rgba(0, 0, 0, 0.72)'

            elemento_imagem.style.height = '90%'
            elemento_imagem.style.borderRadius = '20px'
            elemento_imagem.style.marginLeft = '59px'

            listElements.appendChild(elemento)
            elemento.appendChild(elemento_imagem)
            elemento.appendChild(elemento_nome)
            i++
        }
    }
}
img_search.addEventListener('click', InserirElemento)
input_search.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        InserirElemento()
    }
})

checkbox_element_counts.addEventListener('click', function () {
    let container_element = document.createElement('div')
    let text_alert = document.createElement('h2')
    let container_element_selects = document.createElement('div');
    let result_element = document.createElement('div')
    container_element_selects.id = 'container_element_selects'

    tabela_periodica.addEventListener('click', function (event) {
        let elemento_clicado = event.target.closest('.elemento')
        if (elemento_clicado && tabela_periodica.contains(elemento_clicado)) {
            let simbolo = elemento_clicado.querySelector('a').textContent

            PegarELementoMistura(simbolo)

        }

    })


    container_element_selects.classList.add('container_element_selects')
    container_element.classList.add('container-elements')
    text_alert.textContent = 'Selecionei dois ou mais elementos!!!'
    result_element.classList.add('container_element_selects')


    element_counts.appendChild(text_alert)
    element_counts.appendChild(container_element)
    container_element.appendChild(container_element_selects)
    container_element.appendChild(result_element)
})


async function PegarELementoMistura(simboloSelecionado) {

    const dados = await getElements()
    const elementos = dados.elements

    let container_element_selects = document.getElementById('container_element_selects')


    elementos.forEach(function (element) {
        if (element.symbol == simboloSelecionado) {
            let elemento = document.createElement('div')
            let numero_elemento = document.createElement('h1')
            let simbolo = document.createElement('a')
            let nome_elemento = document.createElement('h2')
            let massa_elemento = document.createElement('h3')

            numero_elemento.textContent = element.number
            simbolo.textContent = element.symbol
            nome_elemento.textContent = element.name
            massa_elemento.te = element.atomic_mass

            elemento.classList.add('container_element_select')

            container_element_selects.appendChild(elemento)
            elemento.appendChild(numero_elemento)
            elemento.appendChild(simbolo)
            elemento.appendChild(nome_elemento)
            elemento.appendChild(massa_elemento)
        }
    })

}


iniciarAplicacao()