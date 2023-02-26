const card_up = document.getElementById('card_up')

let fragment = document.createDocumentFragment()

const dateActual = Date.parse(data.currentDate)


for (let element of data.events) {

let dateFutures = Date.parse(element.date)

    if (dateFutures > dateActual) {

        let div = document.createElement('div')
        div.classList.add("card")
        div.style.width = "25rem"
        div.style.gap = "2"
        div.innerHTML = `<img src="${element.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text">${element.description}</p>
            <p class="card-text">Price:${element.price} </p>
        </div>`
    fragment.appendChild(div)
    }
}
card_up.appendChild(fragment)