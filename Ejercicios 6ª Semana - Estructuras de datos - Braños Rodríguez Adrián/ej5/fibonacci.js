function fibonacci() {
    lista = []
    contador = 0
    while (contador != 20) {
        contador++
        // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765
        var x = [0, 1]
        for (var i = 2; i <= contador; i++) {
            x[i] = x[i - 1] + x[i - 2]
            //2     1       +   1       = 2
            //3     1       +   2       = 3
            //4     2       +   3       = 5
            //5     3       +   5       = 8
        }
        console.log(x)
    }
    alert("Los 20 primeros numeros de la serie de fibonacci es : \n" + x)
}
fibonacci()