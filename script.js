const columnas = 20;
const filas = 20;

const btnGenerarGrilla = document.getElementById("generarGrilla");
const divContainer = document.getElementById("container");
const colorElementoGrid = document.getElementById("inputColor");

btnGenerarGrilla.addEventListener("click", function(){

    for (let i = 0; i < columnas * filas; i++) {
        const nuevoDiv = document.createElement("div");
        nuevoDiv.classList.add("gridItem");
        
        nuevoDiv.addEventListener("click", function(){
            nuevoDiv.style.backgroundColor = colorElementoGrid.value;
        })
        divContainer.appendChild(nuevoDiv);
    }
});

