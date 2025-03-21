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

let palavra = prompt('insira uma palavra');

function inverterTexto(palavra){

    let letras = palavra.split("");
    
    let contrario = letras.reverse();
    
    let juntinho = contrario.join("");
    console.log(juntinho);
}

inverterTexto(palavra);

//Contagem de Caracteres em uma String
//Crie uma função chamada contarCaracteres que receba uma string e retorne o número de caracteres dessa string.

let J = prompt('insira uma palavra para a contagem');

function contarCaracteres(j){
    total = J.length;
    console.log(total);
}

contarCaracteres(J);

//Acessando Propriedades de Objetos
//Crie um objeto carro com as propriedades marca, modelo e ano. Imprima no console o valor da propriedade modelo.

let carro = {
    marca:"BMW",
    modelo: "BMW 530i",
    ano: 2019,

    carrao: function() {
        console.log("Marca: " + this.marca);
        console.log("Modelo: " + this.modelo);
        console.log("Ano: " + this.ano);
    }
};

carro.carrao();

//Função com Parâmetros Opcionais
//Crie uma função chamada mensagemPersonalizada que tenha dois parâmetros,  nome e mensagem
//sendo que o parâmetro mensagem deve ter um valor padrão de "Olá!". A função deve imprimir a mensagem personalizada com o nome da pessoa

let nomezinho = prompt("Insira seu nome");
let mensagem = prompt("Qual é sua mensagem?");

if (mensagem == 0){
    mensagem = ("Olá");
}

function mensagemPersonalizada(nomezinho,mensagem){
    console.log(mensagem + nomezinho);
}

mensagemPersonalizada(nomezinho,mensagem);

//Calculadora de Média
//Crie uma função chamada media que receba 3 números como parâmetros e retorne a média aritmética desses números.

let Anumero = parseFloat(prompt("Informe seu primeiro numero"));
let Bnumero = parseFloat(prompt("Informe seu segundo numero"));
let Cnumero = parseFloat(prompt("Informe seu terceiro numero"));

function calculadoraMedia(Anumero,Bnumero,Cnumero){
    let soma = (Anumero + Bnumero + Cnumero);
    let media = (soma / 3);
    console.log("A média é: " + media);
}

calculadoraMedia(Anumero,Bnumero,Cnumero);

//Laço for com Condição
//Crie um laço for que percorra de 1 a 20 e imprima "Múltiplo de 3" nos  números que sejam múltiplos de 3, e "Não múltiplo de 3" nos outros números.


