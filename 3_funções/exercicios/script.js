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

/* Escreva uma função que receba dois números, o primerio é a base e o segundo a potência;
   Depois faça essa operação e retorne o resultado
   
   function potencia(a,b) {
    return  Math.pow(a,b)
}

console.log(potencia(3,2))
console.log(potencia(10,2))
*/
/* Função que decrementa o valor e só imprime número pares
function decrementa(valor) {
    for(let i = valor; i >= 0; i--){
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}

console.log(decrementa(50))
console.log(decrementa(20))
*/

/* Função para verificar a idade e encapsular o resultado em uma variável
function faixaEtaria(idade){
    let i = idade;
    if(i <= 12){
        return "Criança"
    }
    else if (i >= 12 && i <= 24) {
        return "Jovem"
    }
    else {
        return "Adulto"
    }
}

let crianca = faixaEtaria(11)
let adulto = faixaEtaria(25)
console.log(crianca)
console.log(adulto)
*/

/* Função para analisar se a palavra é um palindromo(identica de trás pra frente)
function isPalindromo(palavra) {
    let invertido = palavra.split('').reverse().join('')
    if (invertido === palavra) {
        console.log(true)
    } else {
        console.log(false)
    }
}

isPalindromo("radar")
isPalindromo("hello")
*/

/* Função para calcular a média que foi colocada dentro do array
function calculateAverage(array){
    let total = 0
    for (let numero of array) {
        total += numero
    }
    let media = total / array.length
    return media
}

console.log(calculateAverage([1,5,10,20]))
*/

/* Função para inverter string e retornar a string invertida
function reverseString(sting){
    let invertido = sting.split('').reverse().join('')
    return invertido
}

console.log(reverseString("banana"))
*/

/* Função contar quantas vogais existem na string
function countVowels(string){
    let total = 0
    for (let letra of string) {
        let letraMinuscula = letra.toLowerCase()
        if('aeiou'.includes(letraMinuscula)) {
            total++
        }
    }
    return total
}

console.log(countVowels("banana"))
*/
/* Função somar somente números pares dentro do array
function sumEvenNumbers(array){
    let total = 0 
    for (let number of array){
        if(number % 2 === 0){
            total += number
        }
    }
    return total
}

console.log(sumEvenNumbers([1,10,15,20,50]))
*/
