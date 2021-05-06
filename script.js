//Nos traemos los elementos necesarios para hacer un grillado exquisito//
const columnas = document.getElementById("columnas");
const filas = document.getElementById("filas");
const btnGenerarGrilla = document.getElementById("generarGrilla");
const divContainer = document.getElementById("container");
const colorElementoGrid = document.getElementById("inputColorLapiz");
const inputColorFondo = document.getElementById('inputColorFondo');
const chkOcultarBordes = document.getElementById("mostarOcultarBordes");
const btnLapiz = document.getElementById("btnLapiz");
const btnGoma = document.getElementById("btnGoma");
const inputTamaño = document.getElementById("inputTamaño");
//variables//
let modoLapiz = true;
let chequeado = chkOcultarBordes.checked = true;
//
btnLapiz.addEventListener("click", function () {
    modoLapiz = true;
    btnLapiz.style.opacity = '1';
    btnGoma.style.opacity = '0.5';
});
//
btnGoma.addEventListener("click", function () {
    modoLapiz = false;
    btnGoma.style.opacity = '1';
    btnLapiz.style.opacity = '0.5';
});
inputColorFondo.addEventListener("input", function(event){
    divContainer.style.background = event.target.value;
})


btnGenerarGrilla.addEventListener("click", function () {
    //Reiniciamos el chexbox
    chequeado = chkOcultarBordes.checked = false;
    //Esta linea borra la grilla ya generada//
    divContainer.innerHTML = "";
    //Pintamos el fondo
    divContainer.style.backgroundColor = inputColorFondo.value;
    //Le decimos cuantas columnas debe tener//
    divContainer.style.gridTemplateColumns = `repeat(${columnas.value}, 1fr)`;
    //Lapiz por default
    btnLapiz.style.opacity = '1';
    btnGoma.style.opacity = '0.5';
    //Creamos la grilla//
    for (let i = 0; i < columnas.valueAsNumber * filas.valueAsNumber; i++) {
        //creamos los divs//
        const nuevoDiv = document.createElement("div");
        //creamos la clase//
        nuevoDiv.classList.add("gridItem");
        //le damos tamaño a las celdas
        nuevoDiv.style.width = `${inputTamaño.value}px`
        nuevoDiv.style.height = `${inputTamaño.value}px`
        //Evento de cambio de color//
        nuevoDiv.addEventListener("click", function () {
            if(modoLapiz === true){
                nuevoDiv.style.backgroundColor = colorElementoGrid.value;
            }else{
                nuevoDiv.style.backgroundColor = "transparent";
            }
        });
        //Para acultar los bordes//
        chkOcultarBordes.addEventListener("click", function () {
            nuevoDiv.classList.toggle("bordesBlancos");
        });
        //Agregamos los divs al contenedor//
        divContainer.appendChild(nuevoDiv);
    }
});

