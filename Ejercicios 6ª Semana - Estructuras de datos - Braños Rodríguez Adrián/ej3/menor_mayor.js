function aleatorio() { //Genera el numero aleatorio
    lista = [] //Creamos el array
    contador = 0
    while (contador != 10) { //Maximo 10 numeros
        contador++
        this.aleatorio = Math.round(Math.random() * (100 - 0) + 1)

        this.aleatorio = aleatorio

        //this.aleatorio = Math.random() * (100 - 0) + 0
        //this.aleatorio = Math.floor(Math.random() * (maximo - minimo + 1) + minimo) / precision;

        console.log("Valor " + contador + " : " + aleatorio)
        lista.push(aleatorio) //Metemos los valores en el array
    }
}
aleatorio()

function guardado() {
    console.log("")
    console.log(lista)
    console.log("")

    for (var i = 0; i < lista.length; i++) {
        //console.log("Lista de i " + lista[i])
        lista.sort(function (a, b) { return a - b })
        lista.reverse()

    }
    console.log("Ordenados de mayor a menor \n \n " + lista)
}
guardado()