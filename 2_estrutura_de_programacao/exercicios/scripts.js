/* Decretando 3 tipos de variaveis string, number e boolean
const nome = "João"
console.log(typeof nome)

let idade = 15
console.log(typeof idade)

let verdadeiro = true
console.log(typeof verdadeiro)

*/

/* Utilizando um if pra fazer o acesso a uma balada caso a idade seja maior de 18
let idade = 17
if (idade >= 18) {
    console.log("Pode entrar!")
}

*/

/* Utilizar uma variavel constante que compare se o seu nome é igual ao da variavel e imprimir uma saudação 

const nome = "Joao"
if (nome == "Joao") {
    console.log(`Olá ${nome}, tudo bem?`)
}

*/

/* Utilizando o Math, imprime a potencia com 3 bases (2,3,18), com o expoente 2

let numero1 = Math.pow(2,2)
console.log(numero1)

let numero2 = Math.pow(3,2)
console.log(numero2)

let numero3 = Math.pow(18,2)
console.log(numero3)

*/

/* Armazenar a velocidade de um carro em uma variavel, utilizar um if e um else para verificar se a velocidade é mais alta do que a permitida (80), se estiver acima ou abaixo imprimir no console

let velocidade = 81
if(velocidade > 80) {
    console.log("Passou da velocidade, tomou multa!")
}

else {
    console.log("Dentro da velocidade permitida")
}

*/

/* Fazer uma estrutura if/else pra verificar se o usuário pode dirigir, armazenar em variáveis dados de idade e cnh, se for maior de 18 e não possuir cnh exibir uma mensagem, se idade for maior de 18 e tiver cnh exibir outra mensagem, se não tiver cnh e menor de 18 exibir outra mensagem 

let idade = 17
let cnh = false

if (idade >= 18 && cnh == true) {
    console.log("Maior de idade com CNH, pode dirigir")
}

else if (idade < 18) {
    console.log("Não pode dirigir, menor de idade")
}

else {
    console.log("Não pode dirigir, sem carteira")
}

*/

/* Exibir um loop while que conte de 1 a 10 no console

let x = 0
while(x <= 10) {
    console.log(`O x vale ${x}`)
    x = x + 1
}

*/

/* Exibir um loop for que exibe números de 100 a 50 no console 

for(let i = 100; i >= 50; i = i - 1) {
    console.log(`O número é ${i}`)
}

*/

/*Escrever um loop While ou for que exiba qual número é impar, o contador deve iniciar em 0 e ir até 50 
// Usando for
for (let i = 0; i <= 50; i = i + 1) {
    if (i % 2 == 0) {
        console.log(`${i} é par`)
    }
    else {
        console.log(`${i} é impar`)
    }
}

// Usando while
let num = 0
while (num <= 50){
    if (num % 2 == 0) {
        console.log(`${num} é par`)
    }
    else {
        console.log(`${num} é impar`)
    }
    num++
}
*/

/* Verificar se o número é primo ou não

let i = 2
let primo = true

for (let j = 2; j < i; j++){
    if (i % j == 0) {
        primo = false
        break
    }
}

if (primo) {
    console.log(i + " É primo")
} else {
    console.log(i + " Não é primo")
}
*/