//Nos traemos los elementos necesarios para hacer un grillado exquisito//
const columnas = document.getElementById("columnas");
const filas =document.getElementById("filas");    
const btnGenerarGrilla = document.getElementById("generarGrilla");
const divContainer = document.getElementById("container");
const colorElementoGrid = document.getElementById("inputColor");

btnGenerarGrilla.addEventListener("click", function(){
//Esta linea borra la grilla ya generada//
    divContainer.innerHTML = "";
//Le decimos cuantas columnas debe tener//
    divContainer.style.gridTemplateColumns = `repeat(${columnas.value}, 1fr)`;
//Creamos la grilla//
    for (let i = 0; i < columnas.valueAsNumber * filas.valueAsNumber; i++) {
        //creamos los divs//
        const nuevoDiv = document.createElement("div");
        //creamos la clase//
        nuevoDiv.classList.add("gridItem");
        //Evento de cambio de color//
        nuevoDiv.addEventListener("click", function(){
            nuevoDiv.style.backgroundColor = colorElementoGrid.value;
        })
        //Evento para poner transparente los divs//
        nuevoDiv.addEventListener("contextmenu", function(event){
            event.preventDefault();
            nuevoDiv.style.backgroundColor = "transparent";
        })
        
        // Borrador de Bordes
        ocultarBordes.addEventListener('click', function(){
        //    const mostrarOcultar = nuevoDiv.classList.add('mostrarOcultar');
        //    mostrarOcultar.style.border = '0px solid white';
        nuevoDiv.classList.toggle('mostrarOcultar');
        })

        /*
        ocultarBordes.addEventListener('dblclick',function toggelGrilla(ocultarBordes){
            const Pintura = ocultarBordes.style.border = '0px solid white';
            if (!Pintura){
                ocultarBordes.style.border = '0px solid black';
            } else{
                mostrarOcultar.style.border = '0px solid white';
            };
        });
        CONSULTARLO!!!... 
*/
        //Agregamos los divs al contenedor//
        divContainer.appendChild(nuevoDiv);
        
    }
});

