function CalculoArea(lado,altura) {
    this.lado = prompt("Dame un parámetro para el lado: ")
    this.altura = prompt("Dame un parámetro para la altura: ")
    
}

var calculoarea = new CalculoArea()
var calculo = calculoarea.lado * calculoarea.altura
alert("El resultado del area es: " + calculo)
console.log("El resultado del area es: " + calculo)