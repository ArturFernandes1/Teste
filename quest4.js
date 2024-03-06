function inverterString(str) {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

// Exemplo de uso
const minhaString = 'Teste para estágio!';
const stringInvertida = inverterString(minhaString);
console.log(stringInvertida); // Saída: '!dlrow ,olleH'
