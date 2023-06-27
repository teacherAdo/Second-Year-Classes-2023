
// Determinar si el valor es un arreglo 
Array.isArray(["elemento1, elemento2, elemento3, elemento4"]); // Verdadero
Array.isArray("elemento1"); // Falso
Array.isArray([]); // Verdadero

/* Arreglo materias */
let materias = ["lenguaje", "mate", "sociales", "ciencias"];

// Splice elimina un único elemento mediante su posición
let elementoEliminado = materias.splice(1, 1); // (indice a eliminar, cantidad de elementos eliminados)
document.write(elementoEliminado);
document.write(materias);

//Clonar un arreglo
const materiasClon = materias.slice(); //(indice, elementos)
console.log(materiasClon);

// Desestructuración de arreglos

let numeracion = ["primero", "segundo", "tercero"];
let uno = numeracion[0];
let dos= numeracion[1];
let tres= numeracion[2];
console.log(uno, dos, tres); 

// Usando la sintaxis de desestructuración
let [uno, dos, tres] = ["primero", "segundo", "tercero"];
console.log(uno, dos, tres); 


// Combinar dos arreglos con spread (...)

const mamiferos = ["perro", "gato", "conejo"];
const reptiles = ["tortuga", "iguana", "serpiente"];

const mascotas = [...mamiferos, ...reptiles];
console.log(mascotas); 

// Concatenar dos o mas arreglos concat()

const first = [1, 2, 3];
const second = [4, 5, 6];
const third = [7, 8, 9];

const merged = first.concat(second, third);

console.log(first); // [1, 2, 3]
console.log(second); // [4, 5, 6]
console.log(third); // [7, 8, 9]
console.log(merged); // [1, 2, 3, 4, 5, 6, 7, 8, 9]