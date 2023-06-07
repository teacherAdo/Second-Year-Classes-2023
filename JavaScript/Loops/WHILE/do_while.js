// DO WHILE
// La instrucción do while se repite hasta que una condición especificada se evalúe como falsa.

do { expresión }
while (condición);


// Ejemplo
let x = 1
do {
    alert("Ejecuta el codigo por primera vez, luego evalua");
}
while (x > 10);

alert("Se detiene cuando la expresion es falsa");




// Elabore un programa que permita ingresar un numero del 1 al 10, y que al ingresar otro numero el programa continue hasta haber obtenido el numero correcto
let numero = 0;
do {
    {
        numero = parseInt(prompt("Type a number between 1-10 "));
    }
} while (numero < 1 || numero > 10);
alert("Congrats, your number is " + numero);

