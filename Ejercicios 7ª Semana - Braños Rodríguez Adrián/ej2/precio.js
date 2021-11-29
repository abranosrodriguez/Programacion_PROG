/**
 *  @function generadorPrecio
 * @property {number} numero_aleatorio Genera un número aleatorio
 */

function generadorPrecio() {
    numero_aleatorio = Math.floor(Math.random() * (251 - 0))
    //console.log("El precio el producto es : " + numero_aleatorio)
    return numero_aleatorio
}

