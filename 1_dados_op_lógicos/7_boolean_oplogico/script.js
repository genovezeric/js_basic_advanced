// && - and (para ser true, os dois 'lados' da comparação precisam ser true)
// || - or (para ser true, basta um dos 'lados' da comparação ser true)
// ! - not (inverte os valores true vira false)

// and
console.log(5 + 5 && 5 * 2 == 10);
console.log(5 > 3 && 3 < 1);
 
// or
console.log(true || false);
console.log(5 + 1 == 6 || 5 * 1 == 6);
console.log("Eric" == "Eric" || "Matheus" == "João");

// not
console.log(!(true && true));
console.log(!(5 + 5 == 10 && 5 + 5 == 10));
