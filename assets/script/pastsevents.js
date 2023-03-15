let past_events = data.events.filter(elemento => new Date(elemento.date) < new Date(data.currentDate))
console.log(past_events)

const card_past = document.getElementById('card_past')

renderizado(past_events,card_past)

//------------------------------- renderizar dinamicamente las cards ---------------------------//


function renderizado(listaCards, contenedor) {
    contenedor.innerHTML = '';

    if (listaCards.length > 0) {

        let fragment = document.createDocumentFragment()
        for (let element of listaCards) {
            let div = document.createElement('div')
            div.classList.add("card")
            div.style.width = "25rem"
            div.style.gap = "2"
            div.innerHTML = `<img src="${element.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text">${element.description}</p>
        <p class="card-text">Price:${element.price} </p>
        <div class="card-body">
        <a href="./details.html?id=${element._id}" class="card-link">Details</a>
        </div>
        </div>`
            fragment.appendChild(div)
        }
        contenedor.appendChild(fragment)
    }else{
        let div = document.createElement('div')
        div.innerHTML = `<p>No hay resultados para su busqueda</p>`
        contenedor.appendChild(div)
    }
}

renderizado(past_events, card_past)

//------------------------------- Renderizar los checkbox dinamicamente-----------------------------------//


const check_box_container = document.getElementById('check_box_container')

check_box_container.appendChild(checkbox(past_events))

function checkbox(array) {

    let arrayCategoria = []

    for (let elemento of array) {

        let categorias = elemento.category
        console.log(categorias)
        arrayCategoria.push(categorias)
    }

    let result = arrayCategoria.filter((item, index) => {
        return arrayCategoria.indexOf(item) === index;
    })

    // ....................................................

    let fragmentCheck = document.createDocumentFragment()

    for (let categoria of result) {

        let div = document.createElement('div')
        div.classList.add("mx-2")
        div.innerHTML = `<label for=${categoria.split(" ").join("")}>${categoria}</label>
    <input type="checkbox" value="${categoria}" name="categorias" id=${categoria.split(" ").join("_")}>`
        fragmentCheck.appendChild(div)
    }
    return fragmentCheck
}

//---------------------------------------- Filtrar las checkbox ------------------------------------------/
let inputsChequeados = []
let checkboxes = document.querySelectorAll('input[type = checkbox]')
console.log(checkboxes);

checkboxes.forEach(checkbox => { checkbox.addEventListener('change', verificarSeleccion) })

function verificarSeleccion() {
    inputsChequeados = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value)
    console.log(inputsChequeados);

    filtrosCruzados(past_events)

}

function filtrarArreglos(arrayString, listaCards) {
    if (arrayString.length === 0) return listaCards
    return listaCards.filter(elemento => arrayString.includes(elemento.category))
}

//----------------------------------------Filtrar por Search--------------------------------------------------//
let stringSearch = ""
const inputText = document.getElementById('search')
inputText.addEventListener('keyup', (e) => {
    stringSearch = e.target.value
    filtrosCruzados(past_events)
})

function searchWord(wordToSearch, listaCards) {
    if (wordToSearch == "") return listaCards
    return listaCards.filter(elemento => elemento.name.toLowerCase().includes(wordToSearch.toLowerCase().trim()))
}

function filtrosCruzados(listaCards) {
    let arrayCheck = filtrarArreglos(inputsChequeados, listaCards)
    let arraySearch = searchWord(stringSearch, arrayCheck)

    renderizado(arraySearch, card_past)
}

//const dateActual = Date.parse(data.currentDate)



// for (let element of data.events) {

// let date_past = Date.parse(element.date)

//     if (date_past < dateActual) {

//         let div = document.createElement('div')
//         div.classList.add("card")
//         div.style.width = "25rem"
//         div.style.gap = "2"
//         div.innerHTML = `<img src="${element.image}" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">${element.name}</h5>
//             <p class="card-text">${element.description}</p>
//             <p class="card-text">Price:${element.price} </p>
//             <div class="card-body">
//             <a href="./details.html" class="card-link">Details</a>
//         </div>
//         </div>`
        
//     fragment.appendChild(div)
//     }
// }
// card_past.appendChild(fragment)