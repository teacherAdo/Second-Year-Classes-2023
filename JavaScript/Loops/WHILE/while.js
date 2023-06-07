// WHILE
// Una declaración while ejecuta sus instrucciones siempre que una condición especificada se evalúe como true. Una instrucción while se conforma de la siguiente forma:

while (condición)
  {expresión}

// Ejemplo
let x = 1;
while (x > 10)
{
    alert("Ejecuta el codigo siempre y cuando la expresion es verdadera");
}
alert("Se detiene cuando la expresion es falsa");


// Elabore un programa que al ingresar un numero, este le devuelva la secuencia desde el cero hasta el numero ingresado
let i=0, max, list=[];
max  = parseInt(prompt("Type a number "));
while(i<=max){
    list += i+' ';
    i++;
}

alert(list);










