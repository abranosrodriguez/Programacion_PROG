var hoy = new Date()
var ano = hoy.getFullYear()
var fecha_introducida = prompt("Dame una fecha:")
var fecha_total = ano - fecha_introducida
if (fecha_total > 18) {
    alert("Eres mayor de 18 años")
}else if (fecha_total < 18){
    alert("Eres menor de 18 años ")
}

//var fecha = Date.Getfullyear()


