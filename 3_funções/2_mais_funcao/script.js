function multiplicarTresNumeros(x,y,z) {
    return x * y * z
}

console.log(multiplicarTresNumeros(10,10,10))

const mult = multiplicarTresNumeros(5,4,8)

console.log("O valor de mult é " + mult)

function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        console.log("Pode dirigir")
    } else {    
        console.log("Não pode dirigir")
    }
}

podeDirigir(18,true)
podeDirigir(17,false)
podeDirigir(25,0)
podeDirigir(21,1)