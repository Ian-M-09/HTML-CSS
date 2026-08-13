/* 1)dividir (Declarativa + Validador): Crear una función declarada dividir(a, b) que devuelva 
la división, pero verifique con un if que b no sea cero.
*/
function Dividir(a,b){
    if(b===0){
        console.log("no se puede dividir por 0")
        throw new Error('No se puede dividir por 0') // creo un error con throw new para validar los datos
    }
    return a/b;
}
/* Le pido al usuario por terminal que ingrese los numeros
const readline = require('readline'); importa un modulo de node.js para leer lo que el usuario escribe

const rl = readline.createInterface({ input: process.stdin, output: process.stdout }); crea la interfaz 
process.stdin le dice que lea el teclado. process.stdout imprime los resultados en la terminal
se guarda todo en la varible rl
rl.question('Ingrese el dividendo: ', (d) => { imprime en consola Ingrese el dividendo: y espera el ingreso de dato
    const a = parseFloat(d); casteo a numero
    rl.question('Ingrese el divisor: ', (e) => { pregunta por el segundo numero
        const b = parseFloat(e); ingreso b
        if (isNaN(a) || isNaN(b)) { valido que sea un numero
            console.log('Número inválido');
        } else {
            try { es el codigo que intento ejecutar con manejo de errores
                console.log(`El resultado es: ${Dividir(a, b)}`);
            } catch (err) { codigo que se ejecuta si no se ejecuta el try
                console.log(err.message); //
            }
        }
        rl.close(); cierra todo, le avisa la a interfaz que ya se termino el trabajo
    });
});
*/
console.log(`El resultado es: ${Dividir(4,2)}`)

/*2) saludar (Declarativa + Template Literals): Crear una función declarada saludar(nombre 
= "Invitado") que use parámetros por defecto y devuelva el mensaje usando template 
literals (`Hola, ${nombre}`).
 */

function Saludar(nombre="invitado"){
    return `Hola, ${nombre}` 
}

console.log(Saludar("Ian"))
console.log(Saludar())

/*calcularArea (Función Flecha - Retorno Implícito): Crear una función flecha en una sola 
línea calcularArea(largo, ancho) para calcular el área de un rectángulo. */

const Area=(l,a)=> l*a

console.log(`El area es: ${Area(3,6)}`)

/*esPar (Función Flecha): Crear una función flecha esPar(numero) que devuelva true si es 
par y false si es impa */

const Par_Impar=(a)=> a%2
console.log(Par_Impar(2)==0)
console.log(Par_Impar(3)==0)
/*encontrarMayor (Flecha u Operador Ternario): Crear una función encontrarMayor(a, b) 
que retorne el número más grande utilizando el operador ternario */

function May(a,b){
    let c= a>b ? `El mayor es ${a}`: `El mayor es ${b}`
    return c
}
console.log(May(1,2))// funciona solo para numeros distintos, no tiene en cuenta numerso iguales