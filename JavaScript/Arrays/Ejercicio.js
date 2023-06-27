// Crea un programa que permita al  usuario ingresar 5 alimentos y 5 bebidas de su preferencia ordenadas de la mejor a la peor. Utilizando arreglos y sus metodos muestre el top 3 de las mejores comidas, y la peor bebida, posteriormente cambia esta ultima bebida por agua que es el liquido vital que debe ser considerado en el ranking.

let alimentosArray = [];
let bebidasArray = [];

//Alimentos
for (var i = 0; i <= 4; i++) {
    var alimentos = prompt("Ingresa el alimento ");
    alimentosArray.push(alimentos);
}
/* Mostrar todos los elementos */
alert("Alimentos seleccionados: " + alimentosArray.join(" "));
 
// Mostrar el top
console.log("El top 3 de las mejores comidas")
for (let i = 0; i <= 2; i++) {  // elemento 1 = pos/indice = 0
    console.log("Top: " + i + " pertenece a " + alimentosArray[i]);
}

// Bebidas
for (var i = 0; i <= 4; i++) {
    var bebidas = prompt("Ingresa la bebida ");
    bebidasArray.push(bebidas);
}
/* Mostrar todos los elementos */
alert("Bebidas seleccionadas: " + bebidasArray.join(" "));

// Mostrar la peor bebida
let ultimaBebida = bebidasArray[bebidasArray.length - 1];
console.log('La peor bebida es: ' + ultimaBebida);

//Cambiar el ultimo elemento por agua
bebidasArray[bebidasArray.length - 1] = "agua"

/* Volver a mostrar el arreglo corregido */
alert("Bebidas seleccionadas incluyendo el vital liquido: " + bebidasArray.join(" "));


//Ejercicio: Ahora modifica el programa para que al final te muestre todos los elementos ingresados en un solo arreglo combinado, clona ese arreglo y cambia la comida o bebida que se encuentren el la posicion o indice 3 y 6 del clon.
