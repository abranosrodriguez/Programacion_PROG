function calculo(secuencia, aleatorio) {
    var lista_numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var lista_aciertos = []
    var aux_secuencia = secuencia
    var aux_aleatorio = aleatorio

    for (let i = 0; i < lista_numeros.length; i++) {

        if ((aux_aleatorio.includes(lista_numeros[i]) == true) & (aux_secuencia.includes(lista_numeros[i]) == true)) {
            for (let j = 0; j < aux_secuencia.length; j++) {
                if (aux_secuencia[j] == lista_numeros[i]) {
                    lista_aciertos[j] = "X"
                }
            }
        }
    }

    for (let i = 0; i < aux_aleatorio.length; i++) {
        if (aux_aleatorio[i] == aux_secuencia[i]) {
            lista_aciertos[i] = "O"
        } else if (lista_aciertos[i] != "X") {
            lista_aciertos[i] = "-"
        }

    }
    return lista_aciertos
}