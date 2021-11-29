/**
 * @function item
    * @property {string} this.nombre Es el producto seleccionado de la lista
    * @property {number} this.precio Precio generado aleatoriamente
    * @property {number} this.rango_menor Numero menor donde se empieza a contar el producto
    * @property {number} this.rango_mayor Precio del producto +1, ya no seria precio justo
 */

function item() {
    function Premio() {
        this.nombre = producto;
        this.precio = numero_aleatorio;
        this.rango_menor = 0;
        this.rango_mayor = (numero_aleatorio + 1);
        //this.precio_justo = precio_justo;
    }
    this.premio = new Premio()
    //premio.nombre = producto
    console.log("El producto es: " + premio.nombre)
    console.log("El precio es: " + premio.precio)
    console.log("El rango mayor es: " + premio.rango_mayor)
    console.log(premio)
    return
}
