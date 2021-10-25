var numero = prompt("Seleccione un producto: 1-Leche, 2-Cacao , 3-Azucar , 4-Avellanas")

function precio() {
    switch(numero){
        case "1":
             alert("Leche 1,50€")
             break
        case "2":
            alert("Cacao 2€")
            break
        case "3":
           alert("Azucar 1€")
            break
        case "4":
           alert("Avellanas 3€")
            break
        default:
	   alert("No hay ninguno producto")
    }
}

precio()
