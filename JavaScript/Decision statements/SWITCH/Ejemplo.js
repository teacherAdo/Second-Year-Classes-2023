

// El Zoologico de El Salvador te pide que le codifiques un programa que, dependiendo del animal ingresado por el usuario, te diga a que tipo pertenece

// Clasificacion de animales
let animal, type;
animal = parseInt(prompt("Ingrese el animal a clasificar: "));
switch (animal) {
    case "rana":
    case "sapo":
    case "salamandra":
        type = " Anfibio";
        break;
    case "perico":
    case "tucan":
    case "colibri":
        type = " Ave";
        break;
    case "elefante":
    case "mono":
    case "delfin":
        type = " Mamifero";
        break;

    default:
        type = " No se encontro el tipo de animal";
}
alert("El animal ingresado es un " + type);


// Car Wash
let automovil = prompt("Escribe el tipo de automovil a lavar en minusculas ");

switch (automovil){
	case "sedan":
		alert("Su lavado es de $3");
		break;

	case "hatchback":
		alert("Su lavado es de $3");
		break;

	case "camioneta":
		alert("Su lavado es de $5");
		break;

        case "pick up":
		alert("Su lavado es de $5");
		break;

	case "microbus":
		alert("Su lavado es de $8");
		break;

    case "bus":
            alert("Su lavado es de $10");
            break;

	default:
		alert("No ha ingresado el tipo de vehiculo correctamente");
}




















let teacher;
let subject;
teacher = parseInt(prompt("Ingrese el numero del teacher: \n 1-Nestor \n 2-Sara \n 3-Ado \n 4-Gaby \n 5-Claudia \n 6-Irvin \n 7-Raquel \n 8-Oscar \n"));
switch (teacher) {
    case 1:
        subject = " Informatica";
        break;
    case 2:
        subject = " Informatica";
        break;
    case 3:
        subject = " Informatica";
        break;
    case 4:
        subject = " Core Values";
        break;
    case 5:
        subject = " Core Values";
        break;
    case 6:
        subject = " English";
        break;

    case 7:
        subject = " English";
        break;
    case 8:
        subject = " English";
        break;

    default:
        subject = " No ha seleccionado un numero valido, intente de nuevo";
}
alert("El teacher seleccionado imparte " + subject);