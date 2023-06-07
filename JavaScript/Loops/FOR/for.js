for (expresion -inicial; condición; expresion -final) {
	//sentencias a ejecutar en cada iteración 
}

expresion - inicial
// Expresiones de asignación 
// Típicamente se utiliza para usarse como variable contador

condición
// Expresión para ser evaluada antes de cada iteración del bucle
// True: La sentencia se ejecuta
// False: El bucle se detiene
expresion - final
// Evaluada al final de cada iteración del bucle
// Generalmente se usa para actualizar o incrementar la variable contador.



// Algoritmo que visualiza los números del 1 al 10


var i = 0;
for( i = 1 ; i < 11 ; i++ ) {
    console.log(i);
}


// Algoritmo que visualiza los números del 10 al 1


for (let contar = 10 ; contar > 0 ; contar-- ) {
    console.log(contar);
}

// Algoritmo que visualiza los números del 0 al 10
var i
for (i = 0; i <= 10; i++) {
	alert(i)
}

// Algoritmo que visualiza los números del 1 al 100 de dos en dos

for (i = 1; i <= 100; i += 2)
	document.write(i)

