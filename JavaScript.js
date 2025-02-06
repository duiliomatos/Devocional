//Definição de variável
var nome = "João";   // Forma antiga (evitar)
let idade = 25;       // Forma correta. Pode ser alterado depois
const PI = 3.1415;    // Constante, não pode ser alterada

//Operadores Lógicos e Aritméticos
let a = 10;
let b = 5;

console.log("Soma:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);
console.log("Resto da divisão:", a % b);
console.log("Exponenciação:", a ** 2);

console.log("10 == '10'?", a == "10");
console.log("10 === '10'?", a === "10");
console.log("10 > 5?", a > b);
console.log("10 <= 5?", a <= b);

let x = true;
let y = false;
console.log("true && false:", x && y);
console.log("true || false:", x || y);
console.log("!true:", !x);

//Estrutura de Controle
let idade = 18;

if (idade < 18) {
    console.log("Você é menor de idade.");
} else if (idade === 18) {
    console.log("Você acabou de atingir a maioridade!");
} else {
    //Executa...
}

//Ou
let nota = 7;
let resultado = nota >= 6 ? "Aprovado" : "Reprovado";
console.log(resultado);

 //Loop For
for (let i = 1; i <= 5; i++) {
    console.log("Número:", i);
}

//Loop While
let contador = 0;
while (contador < 3) {
    console.log("Contagem:", contador);
    contador++;
}

/*Manipulação do DOM (Document Object Model)
O DOM permite que você interaja com os elementos da página HTML. Você pode adicionar, remover ou modificar conteúdo e atributos desses elementos utilizando JavaScript.

Seletores Comuns:
- getElementById: Seleciona um elemento com um ID específico.
- getElementsByClassName: Seleciona elementos com uma classe específica.
- querySelector: Seleciona o primeiro elemento que corresponde a um seletor CSS.
- querySelectorAll: Seleciona todos os elementos que correspondem a um seletor CSS.
*/

// Selecionando elementos
let botao = document.getElementById("meuBotao");
let paragrafo = document.getElementById("minhaParagrafo");
// Modificando conteúdo
botao.addEventListener("click", function() {
    paragrafo.innerHTML = "Você clicou no botão!";
});

let titulo = document.querySelector("h1");
titulo.style.color = "blue";  // Altera a cor do texto para azul
titulo.innerText = "Texto alterado com JavaScript";  // Modifica o texto

//Arrays e Objetos
let frutas = ["maçã", "banana", "laranja"];
console.log(frutas[0]);  // "maçã"
console.log(frutas[1]);  // "banana"

/*
Métodos Comuns de Arrays
push(): Adiciona um novo elemento ao final do array.
pop(): Remove o último elemento do array.
shift(): Remove o primeiro elemento do array.
unshift(): Adiciona um novo elemento ao início do array.
forEach(): Executa uma função em cada elemento do array.
map(): Cria um novo array com base em uma função aplicada aos seus elementos.
*/

let frutas = ["maçã", "banana", "laranja"];

// Adicionando elementos
frutas.push("abacaxi");
console.log(frutas);  // ["maçã", "banana", "laranja", "abacaxi"]

// Removendo o último elemento
frutas.pop();
console.log(frutas);  // ["maçã", "banana", "laranja"]

// Iterando sobre o array
frutas.forEach(function(fruta) {
    console.log(fruta);
});

//Objeto
let pessoa = {
    nome: "Carlos",
    idade: 30,
    cidade: "Rio de Janeiro"
};

// Acessando propriedades
console.log(pessoa.nome);  // "Carlos"

// Alterando propriedades
pessoa.idade = 31;
console.log(pessoa.idade);  // 31

// Iterando sobre as propriedades do objeto
for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
}
