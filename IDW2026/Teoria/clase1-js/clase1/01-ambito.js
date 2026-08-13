// --- 1. COMPORTAMIENTO DE VAR --- 
if (true) { 
var x = 10; 
} 
console.log(x); // Imprime: 10 (Fuga de ámbito fuera del bloque 'if') 

// --- 2. COMPORTAMIENTO DE LET --- 
if (true) { 
let a = 10; 
console.log(a); // Imprime: 10 (Accesible dentro del bloque) 
} 
// console.log(a); // Uncaught ReferenceError: a is not defined 

// Reasignación y re-declaración con let: 
let c = 20; 
c = 30; // VÁLIDO: Reasignación de valor 
// let c = 40; // ERROR: SyntaxError: Identifier 'c' has already been declared 

// --- 3. COMPORTAMIENTO DE CONST --- 
if (true) { 
const d = 10; 
console.log(d); // Imprime: 10 
} 
// console.log(d); // Uncaught ReferenceError: d is not defined 
const f = 20; 
// f = 30; // ERROR: TypeError: Assignment to constant variable. 

// 1. Usar const para valores fijos o referencias que no cambian 
const PI = 3.14159; 

// 2. Usar let solo cuando el valor deba reasignarse explícitamente 
let acumulador = 0; 
acumulador += 15; 

// 3. NUNCA usar var en código ES6+ moderno 