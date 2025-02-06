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

if (condição) {
    //Executa...
} else if (outra condição) {
    //Executa...
} else {
    //Executa...
}

 //Ou
let nota = 7;
let resultado = nota >= 6 ? "Aprovado" : "Reprovado";
console.log(resultado);
