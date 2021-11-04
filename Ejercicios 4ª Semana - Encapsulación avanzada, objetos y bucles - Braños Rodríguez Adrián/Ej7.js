function Aventurero(clase,nivel,raza) {
    this.raza = prompt("Dame una raza para tu pj:    (Demonio,orco,humano...)" )
    this.nivel = prompt("Dame un nivel para tu pj:     (Novato,Intermedio,Maestro...)")
    this.clase = prompt("Dame una clase para tu pj:        (Herrero,Luchador,Comerciante...)")    
    
}

var aventurero = new Aventurero()
alert("Tu personaje es de raza " + aventurero.raza + ", con un nivel " + aventurero.nivel + " y de clase " + aventurero.clase)
console.log("Tu personaje es de raza " + aventurero.raza + ", con un nivel " + aventurero.nivel + " y de clase " + aventurero.clase)