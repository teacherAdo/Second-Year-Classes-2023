
// Switch en JS
// let position;
// let prize;
// position = parseInt(prompt("Ingrese la posicion del ranking: "));
// switch (position) {
//     case 1:
//         prize = " Premio mayor: $10,000";
//         break;
//     case 2:
//     case 3: 
//        prize = " Premio: $3,000";
//         break;
//     case 4:
//     case 5:
//     case 6:
//         prize = " Premio: $1,000";
//         break;
        
//     default:
//         prize = " Gracias por participar";
// }
// alert("Posicion: " + position + "\n" + prize);

let teacher;
let subject;
teacher =
    parseInt(prompt("Ingrese el numero del teacher: \n 1-Nestor \n 2-Sara \n 3-Ado \n 4-Gaby \n 5-Claudia \n 6-Irvin \n 7-Raquel \n 8-Oscar \n"));
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





