/* Criar um função que imprima "Hello World!" no console 

function imprimir() {
    console.log("Hello World!")
}

imprimir()
*/

/*Função que vai imprimir a idade
function idade(x) {
    console.log(`Você tem ${x} anos`)
}

idade(10)
idade(20)
idade(50)
*/

/* Função que soma dois números e retorna eles
function soma(a,b) {
    return a + b
}

console.log(soma(10,15))
console.log(soma(100,50))
console.log(soma(20,30))
*/

/* Função que escolher um numero aleatório
function numeroAleatorio(num) {
    return Math.floor(Math.random() * num) + 1
}

console.log(numeroAleatorio(10))
console.log(numeroAleatorio(50))
console.log(numeroAleatorio(100))
console.log(numeroAleatorio(500))
*/

/* Validar a idade, se for >=18 imprimir que pode entrar na auto escola 
function validarIdade(idade) {
    if (idade >= 18) {
        console.log("Pode entrar na auto escola")
    } else {
        console.log("Não tem idade, não pode entrar na auto escola")
}
}

validarIdade(20)
validarIdade(15)
validarIdade(18)
*/

/* Escrever uma função que detecta o tipo do dado passado, retornar uma mensagem pra cada tipo 

function valorString(valor) {
    if (typeof(valor) === "string") {
        console.log("Você digitou uma string")
    } else if (typeof(valor) === "number"){
        console.log("Você digitou um number")
    } else if (typeof(valor) === "boolean"){
        console.log("Você digitou um boolean")
    } else {
        console.log("Tipo não reconhecido")
}
}

valorString("Teste String")
valorString(15)
valorString(true)
valorString("String")

*/

/* Escrever uma função que receba um valor negativo e retorna o mesmo número positivo
function valorNegativo(valor){
    return Math.abs(valor)
}

console.log(valorNegativo(-10))
console.log(valorNegativo(-5))
console.log(valorNegativo(-20))
*/

/* Escrever uma função que recebe um valor, se for mais que 10 caracteres retornar muito longo
function limiteCaractere(valor) {
    let texto = valor.length
    if (texto > 10){
        console.log("Texto muito longo")
    }
    else {
        console.log("Texto dentro do limite")
    }
}

limiteCaractere("ABC")
limiteCaractere("Texto muito longo")
*/