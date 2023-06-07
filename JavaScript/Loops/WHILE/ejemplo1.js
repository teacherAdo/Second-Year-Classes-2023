
/*El CEO de Google te encomienda que elabores un programa que te pida crear un password y solo dejarte ingresar si lo escribes correctamente, tienes hasta 5 intentos para escribirlo bien, caso contrario no podras ingresar*/
let password, attemps = 0, passwordDB;
passwordDB = prompt("Crear una contraseña: ");

while (password != passwordDB && attemps < 5) {
    password = prompt("Ingrese su cotraseña ");
    if (password == passwordDB) {
        alert("Acceso concedido");
    }
    else {
        alert("Acceso denegado," + "");
        attemps++;
    }
}
if (attemps == 5) {
    alert("Ha ingresado la incorrectamente la contraseña 5 veces, intente de nuevo mas tarde");
}





