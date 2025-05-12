/* if (Se), elif (Se não se), else (Se não) */

let idade = 19
if (idade == 19) {
    console.log("A idade é igual a 19")
}

if (idade > 15) {
    console.log("A idade é maior do que 15")
}

let nome = "Matheus"
if(nome == "Matheus" && idade > 10) {
    console.log("Liberado")
}

let passaporte = true
if (nome == "Matheus" && idade > 30 || passaporte == true) {
    console.log("Liberado")
}
