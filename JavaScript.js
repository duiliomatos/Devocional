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
