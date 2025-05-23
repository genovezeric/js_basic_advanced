function recursion(n) {
    if(n - 1 < 2) {
        console.log("Recursão parou")
    } else if (n % 2 != 0){
        console.log("Numero Impar " + n)
        recursion(n - 1)
    } else {
        console.log("Numero par " + n)
        recursion(n - 2)
    }
}

recursion(40)
recursion(10)
recursion(90)

