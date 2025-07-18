// Creamos las funciones
function registrar_datos() {
    // Registramos el nombre
    nombre = prompt("Ingrese el nombre:")
    // Colocamos dowhile para los errores
    do {
        // Ingresamos los datos a elegir de obrero y empleado
        tipo_trabajador = prompt("Ingrese que tipo de trabajador es: Obrero (O) o Empleado (E)")
        // Corregimos las minusculas
        tipo_trabajador = tipo_trabajador.toUpperCase()
        // Advertimos en los errores
        if (tipo_trabajador != 'O' && tipo_trabajador != 'E') {
            alert("ERROR elija entre esas opciones: Obrero (O) o Empleado (E)")
        }
    } while (tipo_trabajador != 'O' && tipo_trabajador != 'E');
}
function calcular_datos() {
    // Usamos if para separar los datos de enmpleados y obreros
    if (tipo_trabajador === 'O') {
        // Calculamos los datos con operaciones
        bonificacion = sueldo * 20 / 100
        seguro_essalud = sueldo * 6 / 100
        seguro_vida = sueldo * 5 / 100
        pago_total = (sueldo - seguro_vida) + bonificacion
    }
    else {
        // Calculamos los datos con operaciones
        bonificacion = sueldo * 10 / 100
        seguro_essalud = sueldo * 6 / 100
        seguro_vida = sueldo * 2 / 100
        pago_total = (sueldo - seguro_vida) + bonificacion
    }
}