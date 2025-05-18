const n = 10;

let termoAnterior = 0;
let termoAtual = 1;

console.log("Sequência de Fibonacci:");

if (n <= 0) {
    console.log("Número de termos deve ser positivo.");
} else if (n === 1) {
    console.log(termoAnterior);
} else {
    console.log(termoAnterior);
    console.log(termoAtual);

    for (let i = 3; i <= n; i++) {
        let proximoTermo = termoAnterior + termoAtual;
        console.log(proximoTermo);

        termoAnterior = termoAtual;
        termoAtual = proximoTermo;
    }
}
