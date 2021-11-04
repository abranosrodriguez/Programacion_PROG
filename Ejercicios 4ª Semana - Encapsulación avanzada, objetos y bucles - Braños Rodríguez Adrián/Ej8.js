while (valores != "exit") {
    var valores = prompt("Escoge una opción: suma | resta | multiplicacion | division | exit")
    switch (valores) {
        case "suma":
            suma=0
            var numero1 = prompt("Dame el primer valor:")
            if (Number(numero1) == numero1) {
                numero1= parseInt(numero1)
                suma1 = suma + numero1
                console.log(suma1)
            }
            var numero2 = prompt("Dame el segundo valor:")
            if (Number(numero2) == numero2) {
                numero2= parseInt(numero2)
                suma2 = suma + numero2
                console.log(suma2)
            }
            suma = suma1+suma2
            alert("La suma de los valores es: " + suma)
            console.log(suma)
            break;

        case "resta":
            resta=0
            var numero1 = prompt("Dame el primer valor:")
            if (Number(numero1) == numero1) {
                numero1= parseInt(numero1)
                resta1 = resta + numero1
                console.log(resta1)
            }
            var numero2 = prompt("Dame el segundo valor:")
            if (Number(numero2) == numero2) {
                numero2= parseInt(numero2)
                resta2 = resta + numero2
                console.log(resta2)
            }
            resta = resta1-resta2
            alert("La resta de los valores es: " + resta)
            console.log(resta)
            break;

        case "multiplicacion":
            multiplicacion=0
            var numero1 = prompt("Dame el primer valor:")
            if (Number(numero1) == numero1) {
                numero1= parseInt(numero1)
                multiplicacion1 = multiplicacion + numero1
                console.log(multiplicacion1)
            }
            var numero2 = prompt("Dame el segundo valor:")
            if (Number(numero2) == numero2) {
                numero2= parseInt(numero2)
                multiplicacion2 = multiplicacion + numero2
                console.log(multiplicacion2)
            }
            multiplicacion = multiplicacion1*multiplicacion2
            alert("La multiplicacion de los valores es: " + multiplicacion)
            console.log(multiplicacion)
            break;

        case "division":
            division=0
            var numero1 = prompt("Dame el primer valor:")
            if (Number(numero1) == numero1) {
                numero1= parseInt(numero1)
                division1 = division + numero1
                console.log(division1)
            }
            var numero2 = prompt("Dame el segundo valor:")
            if (Number(numero2) == numero2) {
                numero2= parseInt(numero2)
                division2 = division + numero2
                console.log(division2)
            }
            division = division1/division2
            alert("La division de los valores es: " + division)
            console.log(division)
            break;

        case "exit":
            break;
        default:
            alert("No se ha introducido ninguno de los valores")
            break;
    }
}