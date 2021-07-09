import  { filtrarName,filtrarNum,filtrarType,ordenPok, ordenNum} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const personajespok = data.pokemon; 
/* console.log(personajespok); */

function mostrarTargeta (personajespok){
   const TargetasPok = document.getElementById("targetas");
   TargetasPok.innerHTML= '';

for (let i= 0; i <personajespok.length; i++){

     let unidadTargeta= document.createElement("div");
     let imgpok= document.createElement("img");
     let nombres= document.createElement("button");
     let numeros= document.createElement("p");

     unidadTargeta.className="unidadTargeta";
     imgpok.className="imgTargetas";
     nombres.id="nombresPok";
     nombres.className="nombresPoke";
     numeros.className="numeroPok"; 


     imgpok.src= personajespok[i].img;
     nombres.innerHTML=personajespok[i].name;
     numeros.innerHTML=personajespok[i].num;

     unidadTargeta.appendChild(numeros);
     unidadTargeta.appendChild(imgpok);
     unidadTargeta.appendChild(nombres);
     TargetasPok.appendChild(unidadTargeta);
}}

mostrarTargeta(personajespok);

// evento busqueda por nombre

const barraBuscar= document.getElementById("busqueda");
barraBuscar.addEventListener("keyup", buscarPok);
function buscarPok(){
    let ingreso= barraBuscar.value;
    console.log(ingreso);
    let resultadoBuscar= filtrarName(ingreso,personajespok);
    let resultadoBuscarNum= filtrarNum(ingreso,personajespok);
    let resultadoBuscarType= filtrarType(ingreso,personajespok);
    let resultadoFinal= resultadoBuscar.concat(resultadoBuscarNum).concat(resultadoBuscarType);
    mostrarTargeta(resultadoFinal);
}

// evento pokebola

const btninicio = document.getElementById("pokebola");
btninicio.addEventListener("click", function(){
    mostrarhome();
})
 

// evento mostrar contenido 2

function mostrarhome (){
    console.log(document.body.style.backgroundImage="url(../imagenes/home.jpg)")
    inicio.style.display= "none";
    contenido1.style.display="block";
}

//evento buscar

const btnbuscar = document.getElementById("btnbuscar");
btnbuscar.addEventListener("click", function(){
    console.log("click en buscar");

})

const bntOrden = document.getElementById("orden");
bntOrden.addEventListener("change", function(){
let ordenSeleccionado = bntOrden.selectedIndex;
let pokemonesOrdenados = ordenPok(ordenSeleccionado, personajespok);
   mostrarTargeta(pokemonesOrdenados);
})

//evento bntver-todos

const btntodos = document.getElementById("todos");
btntodos.addEventListener("click", function(){

    let ordenNumero= ordenNum(personajespok);
    mostrarTargeta(ordenNumero);
})

let esmalte= "pintar uñas";

console.log(filtrarName, filtrarNum, filtrarType, ordenPok, ordenNum, data);
