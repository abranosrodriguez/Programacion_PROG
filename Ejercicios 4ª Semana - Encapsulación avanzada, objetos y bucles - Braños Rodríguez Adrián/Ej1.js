function multiplo() {
    var numero1 = prompt("Dame el primer número: ")
    var numero2 = prompt("Dame un segundo número: ")

    var resultado = numero1%numero2
    //alert(resultado)

    if (resultado != false) {
        alert("Los números introducidos no son múltiplos,(El resultado no es 0)")
    }else{
        alert("Los números introducidos son múltiplos, (El resultado es 0)")
    }
}
multiplo()