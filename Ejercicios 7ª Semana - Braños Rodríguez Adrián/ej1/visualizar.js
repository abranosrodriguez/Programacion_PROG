function visualizar(secuencia, aciertos_fallos, aleatorio, intentos) {
  var aux_ver_secuencia = secuencia
  var aux_ver_aciertos = aciertos_fallos
  var aux_ver_aleatorio = aleatorio
  var tabla_secuencia = ""
  var tabla_aciertos = ""
  var tabla_aleatortio = ""

  for (let i = 0; i < aux_ver_secuencia.length; i++) {
    tabla_secuencia = tabla_secuencia + (" " + aux_ver_secuencia[i])
    tabla_aciertos = tabla_aciertos + (" " + aux_ver_aciertos[i])
    tabla_aleatortio = tabla_aleatortio + (" " + aux_ver_aleatorio[i])
  }

  if (intentos <= 0) {
    alert("\nPERDISTE, la secuencia ganadora era : " + tabla_aleatortio)
    return false
  } else if (tabla_secuencia == tabla_aleatortio) {
    alert("GANASTE !!" + tabla_aleatortio)
    return true
  } else {
    alert("Secuencia: " + tabla_secuencia + "\nAciertos: " + tabla_aciertos + "\nIntentos restantes :" + intentos)
    return false

  }


}