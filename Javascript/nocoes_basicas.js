let myFirstVariable = 1;
myFirstVariable = "Name";
myFirstVariable = new myClass();

const MY_CONST = "Name of Const";

function add(num_1, num_2){
    return num_1 + num_2;
}
add(1, 3);

//Conceito de export e import
export const MY_NUMBER = "Strong";
export function myFunc(n_1, n_2){
    return n_1+n_2;
}
// Usando em outro arquivo
import {MY_NUMBER, myFunc} from './dir';
myFunc(MY_NUMBER, 2);