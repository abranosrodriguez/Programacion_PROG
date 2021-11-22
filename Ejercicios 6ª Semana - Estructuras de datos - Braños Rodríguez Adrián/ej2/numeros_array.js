function datos() {
    var cantidad_de_datos = prompt("Cuantos datos quieres almacenar?: ")
    console.log("Cantidad de numeros del array: " + cantidad_de_datos)

    this.cantidad_de_datos = cantidad_de_datos
    this.lista = cantidad_de_datos
    lista = []

}
datos()

function rango_numeros() {  //Pide un numero mínimo y máximo 
    this.rango_numeros_minimo = prompt("Dame un numero minimo: ")
    this.rango_numeros_max = prompt("Dame un numero maximo: ")

    console.log("El numero minimo es : " + rango_numeros_minimo)
    console.log("El numero maximo es : " + rango_numeros_max)
}
rango_numeros()

function generador_numero(min, max) { //Genera numeros aleatorios en función de los valores minimos y maximo dados
    contador = 0
    while (contador != cantidad_de_datos) {
        contador++

        this.aleatorio = Math.floor(Math.random() * (rango_numeros_minimo - rango_numeros_max)) - rango_numeros_minimo;;
        this.aleatorio = Math.abs(aleatorio)

        console.log("El numero aleatorio es: " + aleatorio)

        lista.push(aleatorio)

    }
    //console.log("Prueba: " + cantidad_de_datos)
    console.log(lista)
    alert("Tu lista es esta: " + lista)
}
generador_numero()



