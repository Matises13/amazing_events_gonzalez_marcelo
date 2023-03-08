//------------------------------- renderizar dinamicamente las cards ---------------------------//

const card_home = document.getElementById('card_home')


function renderizado(listaCards, contenedor) {
    let fragment = document.createDocumentFragment()
    contenedor.innerHTML = '';

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
        <a href="./details.html" class="card-link">Details</a>
        </div>
        </div>`
        fragment.appendChild(div)
    }
    contenedor.appendChild(fragment)
}

renderizado(data.events,card_home)

//------------------------------- Renderizar los checkbox dinamicamente-----------------------------------//


const check_box_container = document.getElementById('check_box_container')

check_box_container.appendChild(checkbox(data.events))

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

let checkboxes = document.querySelectorAll('input[type = checkbox]')
console.log(checkboxes);

checkboxes.forEach(checkbox => { checkbox.addEventListener('change', verificarSeleccion) })

function verificarSeleccion() {
    let inputsChequeados = Array.from(checkboxes).filter(checkbox => checkbox.checked)
    console.log(inputsChequeados);

    let inputsValue = inputsChequeados.map(input => input.value);
    let arregloCardsFiltradas = filtrarArreglos(inputsValue, data.events);
    renderizado(arregloCardsFiltradas,card_home)

}

function filtrarArreglos(arrayString, listaCards) {
    if (arrayString.length === 0) return listaCards
    return listaCards.filter(elemento => arrayString.includes(elemento.category))
}

//----------------------------------------Filtrar por Search--------------------------------------------------//

// let inputText = document.getElementById('text-input')
// inputText.addEventListener('keyup', (event)=>{
//     console.log(inputText.value)
// let nombre = lista de Input.fine(nombre =>{
//     nombre.serch(e.target.value)
//     retur nombre.toLowerCase().serch(e.target.value.toLowerCase().trim() ) !=1
// } )

// })