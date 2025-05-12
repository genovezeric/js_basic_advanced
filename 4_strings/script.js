// Tudo que estiver dentro de aspas simples ou dupla se torna uma sting (Texto)
console.log("Hello World!");
console.log(typeof ("Hello World!"));
console.log("12345");
console.log(typeof ("12345"));

// A \ pode dar um 'escape' na String, e isso permite 'efeitos especiais';
// Por exemplo: \n pula uma linha
console.log("Isso é uma string \n que tem duas linhas");

// Para inserir uma aspas deve se iniciar com aspas duplas ou vice versa
console.log("Fulano me falou: 'Você me deve dinheiro'");

// O template literal (utilizar crase) serve para computar valores  
console.log(`A soma de 2 + 2 é ${2+2}`);

// Concatenar é o processo de "somar" strings
console.log("salada" + " de" + " fruta");