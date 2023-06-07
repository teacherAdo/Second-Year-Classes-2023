//Programa de teachers Superate utilizando un loop
let teacher;
let subject;

while (teacher != 9) {
    teacher = parseInt(prompt("Ingrese el numero del teacher: \n 1-Nestor \n 2-Sara \n 3-Ado \n 4-Gaby \n 5-Claudia \n 6-Irvin \n 7-Raquel \n 8-Oscar \n 9-Salir del programa \n"));
    switch (teacher) {
        case 1:
        case 2: 
        case 3:
            subject = " Informatica";
            break;
        case 4:
        case 5:
            subject = " Core Values";
            break;
        case 6:
        case 7:
        case 8:
            subject = " English";
            break;
        case 9:
            subject = " El programa ha finalizado exitosamente";
            break;

        default:
            subject = " No ha seleccionado un numero valido, intente de nuevo";
    }
    alert("Respuesta:" + subject);
}
 