function main() {
    var aleatorio = []
    var secuencia = []
    var aciertos_fallos = []
    var intentos = 9
    var repetir = false

    while (repetir == false) {
        var ganar = false
        var intentos = 9
        for (let i = 0; i < 5; i++) {
            aleatorio[i] = numero_aleatorio()
        }
        console.table(aleatorio)

        while ((intentos >= 0) & (ganar == false)) {
            for (let i = 0; i < 5; i++) {
                secuencia[i] = entradas(i)
            }

            console.table(secuencia)
            aciertos_fallos = calculo(secuencia, aleatorio)
            console.table(aciertos_fallos)
            ganar = visualizar(secuencia, aciertos_fallos, aleatorio, intentos)
            if (ganar == false) {
                intentos--
            }
        }
        repetir = confirmar("volver a jugar")
    }



}
main()