/* Arreglos en JS*/
// -Un array es una variable especial, que puede contener más de un valor
// -Coleccion de datos

//crear el array
let colores = ["rojo", 'azul', "verde"]

//mostrar la longitud / tamaño del arreglo
console.log(colores.length)

//mostrar el color de acuerdo al indice 
let primero = colores[0]

//mostrar el ultimo color almacenado en el arreglo
let ultimo = colores[colores.length - 1]

// reasignar un valor a un indice del arreglo
colores[0] = "amarillo";


//Arreglo de marcas de Autos 
const marcas = ['Toyota', 'Nissan', 'Mazda', 'Kia'];

// Recorrer el arreglo
for(let i=0; i<marcas.length; i++) {
  console.log("La posicion " + i + " contiene la marca " + marcas[i]);
}


//Añadir un elemento al final de un Array
let addFinal = marcas.push("Lexus") // Añade "Lexus" al final

//Añadir un elemento al inicio de un Array
let addInicio = marcas.unshift("Honda")

//Eliminar el primer elemento de un Array
let eliminarPrimero = marcas.shift()

//Eliminar un elemento al final de un Array
let eliminarUltimo = marcas.pop() 

//Encontrar el índice de un elemento del Array
let pos = marcas.indexOf("Honda")


// Guardar en un arreglo los numeros del 1 al 100
let array = [];
 
for(let i=1;i<=100;i++){
    array.push(i);
}
 
console.log(array);