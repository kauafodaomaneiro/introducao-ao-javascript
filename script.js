console.log("Hello World")

// Verificação de Par ou Ímpar:
//Crie umma função chamada verificarPar que receba um número como parâmetro e imprima "Par" ou "Ímpar" dependendo do valor.
let numero = prompt('digite seu número');


function verificarPar(numero){

    if(numero % 2 === 0){
        console.log(numero + " é igual a par.");

    }else{
        console.log(numero + " é igual a ímpar.");
    }
}

verificarPar(numero);

//Operações Matemáticas Simples
//Crie uma função chamada calcular que receba dois números e retorne a soma, subtração, multiplicação e divisão desses números.

let numeroA = parseInt(prompt('Digite seu primeiro numero'));
let numeroB = parseInt(prompt('Digite seu segundo numero'));

function calcular(numeroA,numeroB){
    console.log (numeroA + numeroB);
    console.log (numeroA - numeroB);
    console.log (numeroA * numeroB);
    if(numeroB == 0){
        console.log ("não existe divisão por 0.");
    } else{console.log(numeroA / numeroB)};
}

calcular(numeroA,numeroB);

//Laço While para Contagem Regressiva
//Crie um laço while que imprima os números de 10 até 1 no console, um número por vez.

let n = 10;

while( n >= 1){
    console.log(n);
    n--;
}

//Manipulação de Strings
//Crie uma função chamada inverterTexto que receba uma string como parâmetro e retorne essa string invertida. 
//Exemplo: "JavaScript" deve se tornar "tpircSavaJ".

