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
