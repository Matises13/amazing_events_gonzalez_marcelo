let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"

async function stats(url){
    let response = await fetch(url)
    let data = await response.json()

    console.log(data);
    const eventos = data.events
    console.log(eventos);

    renderTabla(eventos)

    const tabla2 = document.getElementById("tabla2")

    renderTabla2(eventos.filter(eventos => eventos.estimate),tabla2)

    const tabla3 = document.getElementById("tabla3")

    renderTabla2(eventos.filter(eventos => eventos.assistance),tabla3)

}

function calculo(array,categoria){
    let arrayFiltrado = array.filter(eventos => eventos.category == categoria)
    let totalRecaudado = arrayFiltrado.reduce((total,evento) => {
        evento.assistance == undefined? total += evento.price * evento.estimate:total += evento.price * evento.assistance
        
        return total
    },0)

    return totalRecaudado;
}

function porcentajeCategoria(array,categoria){
    let arrayFiltrado = array.filter(eventos => eventos.category == categoria)
    let porcentajeTotal = arrayFiltrado.reduce((total,evento) => {
        evento.assistance == undefined? total += evento.estimate / evento.capacity:total += evento.assistance / evento.capacity
        
        return total
    },0)

    return (porcentajeTotal*100/arrayFiltrado.length).toFixed(2);
}

function renderTabla(arrayEvents){
    
    let mayorCapacidad = arrayEvents.reduce((evento1,evento2)=>{if(evento1.capacity > evento2.capacity)return evento1
        return evento2})
            console.log(mayorCapacidad);
    
        let mayorAssistance = arrayEvents.filter(eventos => eventos.assistance).reduce((evento1,evento2)=>{if((evento1.assistance/evento1.capacity) > (evento2.assistance/evento2.capacity))return evento1
            return evento2})
    
        let menorAssistance = arrayEvents.filter(eventos => eventos.assistance).reduce((evento1,evento2)=>{if((evento1.assistance/evento1.capacity) < (evento2.assistance/evento2.capacity))return evento1
            return evento2})
            
    
    const tabla = document.getElementById("eventsGeneral")
    tabla.innerHTML=`<tr>
    <td>${mayorAssistance.name}: ${mayorAssistance.assistance*100/mayorAssistance.capacity} % </td>
    <td>${menorAssistance.name}: ${menorAssistance.assistance*100/menorAssistance.capacity} % </td>
    <td>${mayorCapacidad.name}: ${mayorCapacidad.capacity} </td>
    </tr>`
    
    

}

function renderTabla2(arrayEvents,contenedor){
    let arrayFiltrado = [...new Set(arrayEvents.map(eventos => eventos.category))]
    let fragment = document.createDocumentFragment();
    for (categoria of arrayFiltrado){
        let tr = document.createElement("tr")
        tr.innerHTML = `
        <td>${categoria}:</td>
        <td>$ ${calculo(arrayEvents,categoria)} </td>
        <td>${porcentajeCategoria(arrayEvents,categoria)} %</td>
    `
    fragment.appendChild(tr)
    }
    contenedor.appendChild(fragment);
}

stats(urlApi)

