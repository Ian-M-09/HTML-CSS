// 1. Función con retorno explícito
function obtenerSaludo(nombre) {
  return `Hola, ${nombre}!`;
}
const saludo = obtenerSaludo("Micaela"); 
console.log(saludo); // Imprime: "Hola, Micaela!"

// 2. Función sin retorno (devuelve undefined por defecto)
function mostrarMensaje() {
  console.log("Ejecutando la función...");
  // No hay instrucción 'return'
}
const resultado = mostrarMensaje(); 
console.log(resultado); // Imprime: undefined