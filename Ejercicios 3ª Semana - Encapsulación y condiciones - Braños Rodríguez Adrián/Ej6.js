var frase = prompt("Dame una frase")
const letra_b = "b"
const letra_v = "v"

if (frase.includes(letra_b) == true) {
    const letra_p = "p"
    if(frase.includes(letra_p) == true){
        alert("Esta frase contiene una p y una b")
    }else{
        alert("Esta frase solo contiene una b")
    }
    
}
if (frase.includes(letra_v) == true) {
    const letra_u = "u"
    if(frase.includes(letra_u) == true){
        alert("Esta frase contiene una u y una v")
    }else{
        alert("Esta frase solo contiene una v")
    }
}