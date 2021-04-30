const columnas = document.getElementById("columnas");
const filas =document.getElementById("filas");    

const btnGenerarGrilla = document.getElementById("generarGrilla");
const divContainer = document.getElementById("container");
const colorElementoGrid = document.getElementById("inputColor");

btnGenerarGrilla.addEventListener("click", function(){
    
    divContainer.style.gridTemplateColumns = `repeat(${columnas.value}, 1fr)`;

    for (let i = 0; i < columnas.valueAsNumber * filas.valueAsNumber; i++) {
        const nuevoDiv = document.createElement("div");
        nuevoDiv.classList.add("gridItem");
        
        nuevoDiv.addEventListener("click", function(){
            nuevoDiv.style.backgroundColor = colorElementoGrid.value;
        })
        divContainer.appendChild(nuevoDiv);
    }
});

