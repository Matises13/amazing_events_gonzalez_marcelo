const card_past = document.getElementById('card_past')

let fragment = document.createDocumentFragment()

const dateActual = Date.parse(data.currentDate)


for (let element of data.events) {

let date_past = Date.parse(element.date)

    if (date_past < dateActual) {

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
card_past.appendChild(fragment)