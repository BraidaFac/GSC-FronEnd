//1.1
let pi : number = 3.14159;
let tau: number = pi * 2;
console.log('[Ejercicio 1.1]', `${tau} es ${pi} veces el dos.`);

//1.2
let torta: string;
torta = 'arandanos';
console.log('[Ejercicio 1.2]', `Me gusta comer torta con sabor a ${torta}.`);

//1.3
let esPablo: boolean=true;
console.log('[Ejercicio 1.3]', `${esPablo ? 'Oh, hola Pablo' : 'Quien sos vos?'}`);

//1.4
const entero :number= 6;
const decimal:number = 6.66;
const hexadecimal:61453 = 0xf00d;
const binario:666 = 0b1010011010;
const octal:484 = 0o744;
 const ceroNegativo:number= -0;
 const enRealiadadNumero:number= NaN;
 const mayorNumero:number = Number.MAX_VALUE;
 const elNumeroMasGrande:number = Infinity;
const miembros: any[] = [
entero,
decimal,
hexadecimal,
binario,
octal,
ceroNegativo,
enRealiadadNumero,
mayorNumero,
elNumeroMasGrande];

miembros[0] = '12345';

console.log('[Ejercicio 1.4]', miembros);

//1.5
 const secuencia: number[]= Array.from(Array(10).keys());
 const animales: string[] = ['pinguino', 'oso hormiguero', 'zorro', 'jirafa'];
 const cadenasYNumeros: (string|number)[]= [1, 'uno', 2, 'dos', 3, 'tres'];
 const todosMisArreglos : (number[]|string[]|(string|number)[])[]= [secuencia, animales,cadenasYNumeros];

 console.log('Ejercicio 1.5', todosMisArreglos);

 //1.6
 const elementoInventario :(string|number)[]= ['tuerca', 11];
 // despues lo desestructuramos
 const array =['tuerca'];
 const [nombre, cantidad]:(string|number)[]= elementoInventario;
const mensaje = agregarInventario(nombre, cantidad);

console.log('[Ejercicio 1.6]', mensaje);

function agregarInventario(nombre: string|number, cantidad: number|string): string {
return `Se agregaron ${cantidad} ${nombre}s al inventario.`;
}

