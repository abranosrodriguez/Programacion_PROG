function ej1() {
    function multiplo() {
        var numero1 = prompt("Dame el primer número: ")
        var numero2 = prompt("Dame un segundo número: ")
    
        var resultado = numero1%numero2
        //alert(resultado)
    
        if (resultado != false) {
            alert("Los números introducidos no son múltiplos,(El resultado no es 0)")
        }else{
            alert("Los números introducidos son múltiplos, (El resultado es 0)")
        }
    }
    multiplo()
}

function ej2() {
    var parametro_numero = prompt("Dame un número: ")
    let esnumeroprimo = true;
    if (parametro_numero >= 101) {
        alert("Este número es mayor que 100, no está permitido")
        //break
        
    }else if (parametro_numero <= 100) {
        alert("Este número es menor que 100, ahora te decimos si es primo o no")
        for (let i = 2; i<parametro_numero / 2; i++){
            if(parametro_numero %i === 0){
                esnumeroprimo = false
            }
        }
        if (esnumeroprimo) {
            alert("Es un numero primo")
        }else{
            alert("No es un numero primo")
        }
    }
}

function ej3() {
    var cadena = prompt("Escribe algo: ")
    var numero_caracteres = cadena.length
        //alert(numero_caracteres)

    var contador = 0
        //alert(contador)
    while (numero_caracteres != contador) {
        alert(cadena.charAt(contador))
        contador++
    }
}

function ej4() {
    function Producto (nombre, cantidad) {
        this.nombre = prompt("Dame un producto: ");
        this.cantidad = prompt("Dame la cantidad del producto");
    };
    
    var producto = new Producto()
    alert("El nombre del producto escrito es: " + producto.nombre)
    alert("La cantidad del producto son: " + producto.cantidad + " uds")
    
    console.log(producto)
}

function ej5() {
    function CalculoArea(lado,altura) {
        this.lado = prompt("Dame un parámetro para el lado: ")
        this.altura = prompt("Dame un parámetro para la altura: ")
        
    }
    
    var calculoarea = new CalculoArea()
    var calculo = calculoarea.lado * calculoarea.altura
    alert("El resultado del area es: " + calculo)
    console.log("El resultado del area es: " + calculo)
}

function ej6() {
    var contador=0
    var suma = 0
    while (contador != 10) {
        var numero = prompt("Dame el " + contador + " valor: ")
        if (Number(numero) == numero) {
            numero= parseInt(numero)
            suma = suma + numero
            contador++

            if (contador == 10) {
            var media = suma/contador
            alert("La media de los 10 numeros insertados es de: " + media)
            }
        
        }else{
            alert("Solo se admiten numeros")
            top
        }
            
        
    console.log(numero)
    console.log("Contador:"+contador)
    console.log("Suma:"+suma)

    }
}

function ej7() {
    function Aventurero(clase,nivel,raza) {
        this.raza = prompt("Dame una raza para tu pj:    (Demonio,orco,humano...)" )
        this.nivel = prompt("Dame un nivel para tu pj:     (Novato,Intermedio,Maestro...)")
        this.clase = prompt("Dame una clase para tu pj:        (Herrero,Luchador,Comerciante...)")    
        
    }
    
    var aventurero = new Aventurero()
    alert("Tu personaje es de raza " + aventurero.raza + ", con un nivel " + aventurero.nivel + " y de clase " + aventurero.clase)
    console.log("Tu personaje es de raza " + aventurero.raza + ", con un nivel " + aventurero.nivel + " y de clase " + aventurero.clase)
}

function ej8() {
    while (valores != "exit") {
        var valores = prompt("Escoge una opción: suma | resta | multiplicacion | division | exit")
        switch (valores) {
            case "suma":
                suma=0
                var numero1 = prompt("Dame el primer valor:")
                if (Number(numero1) == numero1) {
                    numero1= parseInt(numero1)
                    suma1 = suma + numero1
                    console.log(suma1)
                }
                var numero2 = prompt("Dame el segundo valor:")
                if (Number(numero2) == numero2) {
                    numero2= parseInt(numero2)
                    suma2 = suma + numero2
                    console.log(suma2)
                }
                suma = suma1+suma2
                alert("La suma de los valores es: " + suma)
                console.log(suma)
                break;
    
            case "resta":
                resta=0
                var numero1 = prompt("Dame el primer valor:")
                if (Number(numero1) == numero1) {
                    numero1= parseInt(numero1)
                    resta1 = resta + numero1
                    console.log(resta1)
                }
                var numero2 = prompt("Dame el segundo valor:")
                if (Number(numero2) == numero2) {
                    numero2= parseInt(numero2)
                    resta2 = resta + numero2
                    console.log(resta2)
                }
                resta = resta1-resta2
                alert("La resta de los valores es: " + resta)
                console.log(resta)
                break;
    
            case "multiplicacion":
                multiplicacion=0
                var numero1 = prompt("Dame el primer valor:")
                if (Number(numero1) == numero1) {
                    numero1= parseInt(numero1)
                    multiplicacion1 = multiplicacion + numero1
                    console.log(multiplicacion1)
                }
                var numero2 = prompt("Dame el segundo valor:")
                if (Number(numero2) == numero2) {
                    numero2= parseInt(numero2)
                    multiplicacion2 = multiplicacion + numero2
                    console.log(multiplicacion2)
                }
                multiplicacion = multiplicacion1*multiplicacion2
                alert("La multiplicacion de los valores es: " + multiplicacion)
                console.log(multiplicacion)
                break;
    
            case "division":
                division=0
                var numero1 = prompt("Dame el primer valor:")
                if (Number(numero1) == numero1) {
                    numero1= parseInt(numero1)
                    division1 = division + numero1
                    console.log(division1)
                }
                var numero2 = prompt("Dame el segundo valor:")
                if (Number(numero2) == numero2) {
                    numero2= parseInt(numero2)
                    division2 = division + numero2
                    console.log(division2)
                }
                division = division1/division2
                alert("La division de los valores es: " + division)
                console.log(division)
                break;
    
            case "exit":
                break;
            default:
                alert("No se ha introducido ninguno de los valores")
                break;
        }
    }
}


while ( dato != "exit") {
    var dato = prompt("Dame un dato: 1->ej1 | 2->ej2 | 3->ej3 | 4->ej4 | 5->ej5 | 6->ej6 | 7->ej7 | 8->ej8 | exit->Finalizar Menú")
    switch (dato) {
        case "1":
            ej1();
        break;

        case "2":
            ej2();
        break;

        case "3":
            ej3();
        break;

        case "4":
            ej4();
        break;

        case "5":
            ej5();
        break;

        case "6":
            ej6();
        break;

        case "7":
            ej7();
        break;

        case "8":
            ej8();
        break;

        case "exit":
            break;

        default:
            alert("Error, escribe como lo indica en la pestaña")
            break;
    }
}