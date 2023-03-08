const queryString = location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const details = data.find(card => card.id == id)

const div = document.querySelector("#container")
div.innerHTML = `<div class="card">
                <img src="./assets/img/Marathon.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Card name</h5>
                <p class="card-text">Some quick example text to build on the card.</p>
                <p class="card-text">Description.</p>
                <p class="card-text">Category.</p>
                <p class="card-text">Place.</p>
                <p class="card-text">Capacity.</p>
                <p class="card-text">Assistance or estimate.</p>
                <p class="card-text">Price.</p>
                </div>
                <div class="card-body">
                <a href="#" class="card-link">Details</a>
                </div>
                </div>`