/**
 * @function lista_producto_aleatorio
    * @property {string} lista Lista de los productos
    * @property {string} producto Escoge un producto de la lista
 */
function lista_producto_aleatorio() { // Escoge un producto al azar

    lista = ["tv", "ordenador", "cepillo de dientes", "tartera"]
    for (i = 0; i < lista.length; i++) {
        numero_aleatorio_lista = Math.round(Math.random() * (i - 0))
    }
    //producto = []
    //producto.push(lista[numero_aleatorio_lista])
    producto = (lista[numero_aleatorio_lista])
    return producto
}