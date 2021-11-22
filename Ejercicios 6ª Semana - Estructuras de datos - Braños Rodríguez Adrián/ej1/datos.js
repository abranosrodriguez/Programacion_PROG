function valores() {
    var lista = []
    var lista_contador = []
    var contador = 0

    do {
        var dato = prompt("Dame un dato: " +
            "\n[exit - para salir]" +
            "\n[Los datos se mostrarán en la consola una vez finalizado]")
        contador++

        lista_contador.push(contador)
        lista.push(dato)

    } while (dato != "exit") {
        lista.pop(dato)
        lista_contador.pop(contador)

        for (var i = 0; i < lista.length; i++) {
            for (var j = 0; j < lista_contador[j]; j++) {
                console.log("Tu valor " + lista[i] + ", está en la posición " + lista_contador[i])
            }
        }
    }
    console.log("Datos del Array:" + lista)
    console.log("Posiciones: " + lista_contador)
}

valores()