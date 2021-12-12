function main() {
    valor = null
    while (valor != 4) {
        valor = prompt("Que quieres hacer: \n1 -> Introducir un Vehiculo \n2 -> Sacar behiculo \n3 -> Comprobar Parking\n4 -> Exit")
        if (valor == 1) {
            //PEDIMOS UN NOMBRE AL USUARIO PARA DESPUÉS QUE BUSQUE EL SU VEHICULO
            introducirParking = prompt("Dame un nombre para asociar con el vehiculo")
            parking.espacioOcupado.push(introducirParking)

            //QUE APARCAMOS
            introducirVehiculo = prompt("Es un :\n1 -> Coche \n2 -> Camion")
            introducirVehiculo = introducirVehiculo.toLowerCase()
            if (introducirVehiculo == 1) {
                parking.tamano.push("coche")
            } else if (introducirVehiculo == 2) {
                parking.tamano.push("camion")
                parking.tamano.push("-")
            } else {
                alert("Error - Me tienes que decir si tienes Coche o Camion")
                parking.espacioOcupado.pop()
            }

            //LE PEDIMOS QUE VEHICULO DESEA SACAR
        } else if (valor == 2) {
            sacarParking = prompt("Que coche quieres sacar? " + parking.espacioOcupado)
            if (sacarParking == "") {
                alert("Error")
            } else {
                for (let i = 0; i < parking.espacioOcupado.length; i++) {
                    posicion = (parking.espacioOcupado.indexOf(sacarParking))
                    //console.log("Posicion del vehiculo " + sacarParking + " es : " + posicion)
                    for (let j = 0; j < parking.tamano.length; j++) {
                        //console.log(parking.tamano[posicion])
                    }
                }

                if (parking.tamano[posicion] == "coche") { //Si es 1 coche saca uno, si no saca 2  -  console.log("Posicion " + parking.tamano[posicion])
                    parking.tamano.splice(posicion, 1)
                } else {
                    parking.tamano.splice(posicion, 1)
                    parking.tamano.splice(posicion, 1)
                }
                let nombre = parking.espacioOcupado.indexOf(sacarParking)
                parking.espacioOcupado.splice(nombre, 1)
            }
            //ENSEÑAMOS LA OCUPACIÓN EL PARKING
        } else if (valor == 3) {
            alert("Ocupado por: " + parking.espacioOcupado + "\nVehiculo: " + parking.tamano)

            //SALIMOS
        } else if (valor == 4) {
            break
        } else {
            alert("\nError - Seleccione una de las opciones")
        }
        console.log(parking.espacioOcupado)
        console.log(parking.tamano)
    }

}
main()