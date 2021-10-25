function ej1(){
    var num_intro_usu = prompt("Dame un número: ")
    if (num_intro_usu < 10) {
        alert("El numero es menor que 10")
    }
    if (num_intro_usu > 10){
        alert("El número es mayor que 10")
    }
    if (num_intro_usu == 10){
      alert("Los números son iguales")
    }
}

function ej2() {
    var palabra = prompt("Dame unas palabras: ")
    const letra = "b"

    if (palabra.includes("b") == true) {
    alert("La palabra/s tiene b")
    }

}

function ej3() {
    var hoy = new Date()
    var ano = hoy.getFullYear()
    var fecha_introducida = prompt("Dame una fecha:")
    var fecha_total = ano - fecha_introducida

    if (fecha_total > 18) {
     alert("Eres mayor de 18 años")
    }else if (fecha_total < 18){
        alert("Eres menor de 18 años ")
    }

    //var fecha = Date.Getfullyear()
}

function ej4() {
    var numero = prompt("Seleccione un producto: 1-Leche, 2-Cacao , 3-Azucar , 4-Avellanas")

    function precio() {
        switch(numero){
            case "1":
                alert("Leche 1,50€")
             break
             case "2":
            alert("Cacao 2€")
                break
            case "3":
            alert("Azucar 1€")
                break
            case "4":
            alert("Avellanas 3€")
                break
            default:
        alert("No hay ninguno producto")
        }
    }       

    precio()
}

function ej5() {
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
}

function ej6() {
    var frase = prompt("Dame una frase")
    const letra_b = "b"
    const letra_v = "v"

    if (frase.includes(letra_b) == true) {
        const letra_p = "p"
        if(frase.includes(letra_p) == true){
            alert("Esta frase contiene una p y una b")
        }else{
            alert("Esta frase solo contiene una b")
        }
        
    }
    if (frase.includes(letra_v) == true) {
        const letra_u = "u"
        if(frase.includes(letra_u) == true){
            alert("Esta frase contiene una u y una v")
        }else{
            alert("Esta frase solo contiene una v")
        }
    }
}

function ej7() {
    var numero = prompt("Dame un número entero: ")

    if (numero%2 == 0) {
        alert("El número es par")
    }else{
        alert("El número es impar")
    }
}

function ej8() {
    var texto = prompt("Escribeme algo: ")

    if (texto.length%2 == 0) {
        alert("La cadena de texto es par")
    }else{
        alert("La cadena de texto es impar")
    }
}
alert("Ejercicio 1")
ej1()
alert("Ejercicio 2")
ej2()
alert("Ejercicio 3")
ej3()
alert("Ejercicio 4")
ej4()
alert("Ejercicio 5")
ej5()
alert("Ejercicio 6")
ej6()
alert("Ejercicio 7")
ej7()
alert("Ejercicio 8")
ej8()