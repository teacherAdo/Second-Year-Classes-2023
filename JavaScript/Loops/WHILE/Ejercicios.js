/*
Eres contratado por Super Selectos para elaborar un programa que le permita al usuario ingresar una serie de opciones disponibles en su pagina web, con la opcion de elegirlos cuantas veces quieran hasta que el usuario decida pasar a caja a pagar.

Los optionsos disponibles son:
-leche descremada
-carton de huevos
-cereal zucaritas
-jamon de pavo
-queso procesado
-queso duro blando
*/


let options, product;
let loop, up;
let totalOptions = [];

do {
  options = parseInt(prompt("Elige el producto: \n 1-Leche \n 2-Huevos \n 3-Cereal \n 4-Jamon \n 5-queso procesado \n 6-duro blando \n 7- Finalizar las compras \n"));

  switch (options) {
    case 1:
      product = "leche descremada";
      break;
    case 2:
      product = "carton de huevos";
      break;
    case 3:
      product = "cereal zucaritas";
      break;
    case 4:
      product = "jamon de pavo";
      break;
    case 5:
      product = "queso procesado";
      break;
    case 6:
      product = "queso duro blando";
      break;
    case 7:
      product = "La compra ha finalizado exitosamente";
      break;
    default:
      product = "No ha seleccionado un número de item válido. Por favor, inténtelo de nuevo";
  }

  totalOptions.push(options); // Almacenar producto en el arreglo

  alert("Ha seleccionado: " + product);
  alert("Productos almacenados en el carrito: Id:" + totalOptions.join("\n Id: ")); // Mostrar acumulado de productos separadas por salto de linea

  do {
    loop = prompt("¿Desea continuar comprando? \n Si=S \n No=N");
    up = loop.toUpperCase(); //Convertir todos los caracteres ingresados en Mayuscula
  } while (up !== 'S' && up !== 'N');

} while (options !== 7 && up === 'S');

if (up === 'N') {
  alert("Ha salido de la tienda online");
}
















