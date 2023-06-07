
// Eres un programador y te contratan para elaborar un programa en Js en una escuela de San Salvador.La maestra te solicita que a partir de las notas ingresada del estudiante en los tres trimestres del año, calcule el promedio.Si el resultado final calculado es menor que 5, el estudiante esta REPROBADO, si es mayor o igual que 5 y menor o igual que 8, esta APROBADO, y si el promedio de los 3 periodos es mayor que 8 se gradua con HONORES

let grade1, grade2, grade3, avrg, studentStatus;
grade1 = parseFloat(prompt("Ingrese nota 1st trimestre "));
grade2 = parseFloat(prompt("Ingrese nota 2nd trimestre "));
grade3 = parseFloat(prompt("Ingrese nota 3rd trimestre "));
avrg = (grade1 + grade2 + grade3) / 3;

if (avrg < 5) {
    studentStatus = " Alumno Reprobado";
} else {
    if (avrg >= 5 && avrg <= 8) {
        studentStatus = " Alumno Aprobado";
    } else {
        if (avrg >= 9 && avrg <= 10) {
            studentStatus = " Alumno con Honores";
        } else {
            studentStatus = " Ha ingresado los datos incorrectamente, intende de nuevo";
        }
    }
}
alert(" Estado:" + studentStatus + " \n Su promedio fue : " + avrg );
























