function fibonacciSequence(n) {
    let fibSeq = [0, 1];
    while (fibSeq[fibSeq.length - 1] < n) {
        fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2]);
    }

    if (fibSeq.includes(n)) {
        return `O número ${n} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${n} não pertence à sequência de Fibonacci.`;
    }
}

const numeroPredefinido = 24; // Altere este valor para o número desejado
console.log(fibonacciSequence(numeroPredefinido));
