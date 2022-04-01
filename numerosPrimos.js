function isPrimo(numero) {
    for (let i = 2, root = Math.sqrt(numero); i <= root; i++)
        if (numero % i === 0) return false;
    return numero > 1;
}

for (let i = 0; i <= 100; i++) {
    if (isPrimo(i))
        console.log(`El numero ${i} es primo`);
}
