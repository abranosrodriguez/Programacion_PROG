function numeros_aleatorios() { //Genera numeros aleatorios
    lista_numeros = []
    contador = 0
    while (contador != 10) {
        contador++
        this.aleatorio = Math.round(Math.random() * (100 - 0))
        this.aleatorio = aleatorio
        lista_numeros.push(aleatorio)
    }
    console.log(lista_numeros)
}
numeros_aleatorios()

function comprobacion_par() {
    lista_par = []
    lista_impar = []
    for (var i = 0; i < lista_numeros.length; i++) {
        //console.log("Lista: " + lista_numeros[i])
        if ((lista_numeros[i] % 2) == 0) {
            //console.log("Este numero es par " + lista_par)
            lista_par.push(lista_numeros[i])

        } else {
            //console.log("Este numero es impar")
            lista_impar.push(lista_numeros[i])

        }

    }
    console.log("Lista par: " + lista_par)
    console.log("Lista par: " + lista_impar)

}
comprobacion_par()

function resultado() {
    alert(
        "El Array es: " + lista_numeros +
        "\nLa lista de los numeros pares es: " + lista_par +
        "\nLa lista de los numeros impares es: " + lista_impar
    )
}
resultado()