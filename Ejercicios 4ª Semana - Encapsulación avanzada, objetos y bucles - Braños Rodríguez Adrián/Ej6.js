var contador=0
var suma = 0
while (contador != 10) {
    var numero = prompt("Dame el " + contador + " valor: ")
    if (Number(numero) == numero) {
        numero= parseInt(numero)
        suma = suma + numero
        contador++

        if (contador == 10) {
        var media = suma/contador
        alert("La media de los 10 numeros insertados es de: " + media)
        }
       
    }else{
        alert("Solo se admiten numeros")
        top
    }
        
    
console.log(numero)
console.log("Contador:"+contador)
console.log("Suma:"+suma)

}

