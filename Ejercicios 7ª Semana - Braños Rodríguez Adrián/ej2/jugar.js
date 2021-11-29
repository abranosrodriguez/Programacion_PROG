/**
    * @function jugar
    * @property {string} isJugar Pregunta si desea jugar
    * @property {number} intentos Intentos realizados
    * @property {number} precio_usuario Precio que supone el usuario que vale el objecto
 */

function jugar() {

    repetir = true
    while (repetir != false) {
        isJugar = prompt("Quieres Jugar al 'Precio Justo'?   Si | No")
        isJugar = isJugar.toLowerCase()
        intentos = 5
        intentos2 = 5
        if (isJugar == "si") {
            lista_producto_aleatorio()
            generadorPrecio()
            item()
            while (intentos != 0) {
                precio_usuario = prompt("El objecto es: " + "[ " + premio.nombre + " ]" + "\nCual es su precio justo?" + "\nIntentos Restantes: " + "[ " + intentos + " ]")
                if (precio_usuario != Number(precio_usuario)) {
                    alert("ERROR - Solo se aceptan numeros")
                } else {
                    intentos--
                    intentos2--
                    if (precio_usuario == numero_aleatorio) {
                        alert("PRECIO JUSTO!!")
                        intentos = 0
                    } else if (precio_usuario >= premio.rango_mayor) {
                        alert("Has Superado el precio, PERDISTE ;(")
                        intentos = 0
                    } else if (precio_usuario >= premio.rango_menor) {
                        alert("El precio es mas alto al insertado")
                    }
                }
            }
            if (intentos2 == 0) {
                alert("\n PERDISTE POR INTENTOS")
            }
        } else {
            alert("Gracias por la visita")
            repetir = false
        }
    }

}


