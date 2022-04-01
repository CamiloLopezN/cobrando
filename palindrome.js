function isPalindrome(palabra) {
    let final = '';
    let cont = palabra.length - 1;
    for (let i = 0; i < palabra.length; i++) {
        final += palabra.charAt(cont)
        cont--;
    }
    return final === palabra;
}

console.log('La palabra oso es palindrome? ' + isPalindrome('oso'));
console.log('La palabra reconocer es palindrome? ' + isPalindrome('reconocer'));
console.log('La palabra radar es palindrome? ' + isPalindrome('radar'));
console.log('La palabra pala es palindrome? ' + isPalindrome('pala'));

