function Producto (nombre, cantidad) {
    this.nombre = prompt("Dame un producto: ");
    this.cantidad = prompt("Dame la cantidad del producto");
};

var producto = new Producto()
alert("El nombre del producto escrito es: " + producto.nombre)
alert("La cantidad del producto son: " + producto.cantidad + " uds")

console.log(producto)

