var seleccion = prompt("Escoge una forma: 1-Triangulo, 2-Rectangulo, 3-Pentagono, 4-Hexagono")
function forma() {
    switch(seleccion){
        case "1":
            // Area=(b*h)/2 triangulo
                var base = prompt("Dame un número para la base")
                var altura = prompt("Dame un númeor para la altura")
                var area = (base * altura)/2
                alert("El area es: " + area)
             break
        case "2":
            // Area=b*h rectangulo
            var base = prompt("Dame un número para la base")
            var altura = prompt("Dame un númeor para la altura")
            var area = (base * altura)/2
            alert("El area es: " + area)
            break
        case "3":
            // perimetro = x*5 Area=(perimetro*apotema)/2
            var perimetro = prompt("Dame un perimetro")
            perimetro = perimetro * 5
            var apotema = prompt("Dame una apotema")
            var area = (perimetro * apotema)/2
           alert("El area es: " + area)
            break
        case "4":
            // perimetro = x*6 Area=(perimetro*apotema)/2
            var perimetro = prompt("Dame un perimetro")
            perimetro = perimetro * 5
            var apotema = prompt("Dame una apotema")
            var area = (perimetro * apotema)/2
           alert("El area es: " + area)
            break
        default:
	    alert("No hay ninguna forma seleccionada")
    }
}

forma()