// Em alguns casos o JS resolve os valores sem apresentar erro


// Aqui é uma tentativa de somar uma string com number, e retorna uma string
console.log("123" + 5);
console.log(typeof ("123" + 5));

// Nesse caso como não é possivel diminuir uma string, ele retorna number
console.log("30" - 20); 

// Como nesse caso é um string de letrar tentando multiplicar, ele retorna NaN
console.log("abc" * 123);
