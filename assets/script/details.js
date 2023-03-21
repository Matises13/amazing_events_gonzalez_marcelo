async function load () {
    try{
        let respuesta = await fetch("https://mindhub-xj03.onrender.com/api/amazing");
        let data = await respuesta.json()
        const id = new URLSearchParams(location.search).get("id")
        const details = data.events.find(elemento => elemento._id == id)
        console.log(details)
        createCards(details)        
    }catch(error){
        console.log("Dentro del Catch: "+ error.message);
    }
}
load()
 //------------------------------- renderizar dinamicamente las cards ---------------------------//
 function createCards(details) {
    let div = document.getElementById("container");
    div.innerHTML = `<div class="card">
                <img src="${details.image} " class="card-img-top" alt="${details.name} ">
                <div class="card-body">
                <h5 class="card-title">${details.name} </h5>
                <p class="card-text">Date: ${details.date} </p>
                <p class="card-text">Description: ${details.description} </p>
                <p class="card-text">Category: ${details.category} </p>
                <p class="card-text">Place: ${details.place} </p>
                <p class="card-text">Capacity: ${details.capacity} </p>
                <p class="card-text">${details.assistance == undefined? "Estimate" : "Assistance"}: ${details.assistance == undefined? details.estimate : details.assistance}</p>
                <p class="card-text">Price: $ ${details.price} </p>
                </div>
                <div class="card-body">
                <input class="card-link" type="button" value="Back" onClick="history.go(-1);">
                </div>
                </div>`
}

