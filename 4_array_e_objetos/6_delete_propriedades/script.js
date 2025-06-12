let pessoa = {
    nome: "Joao",
    idade: 20,
    profissao: "Gerente"
}

console.log(pessoa.nome)

delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

pessoa.casado = false
console.log(pessoa.casado)