"use strict";
//1.1
let pi = 3.14159;
let tau = pi * 2;
console.log('[Ejercicio 1.1]', `${tau} es ${pi} veces el dos.`);
//1.2
let torta;
torta = 'arandanos';
console.log('[Ejercicio 1.2]', `Me gusta comer torta con sabor a ${torta}.`);
//1.3
let esPablo = true;
console.log('[Ejercicio 1.3]', `${esPablo ? 'Oh, hola Pablo' : 'Quien sos vos?'}`);
//1.4
const entero = 6;
const decimal = 6.66;
const hexadecimal = 0xf00d;
const binario = 0b1010011010;
const octal = 0o744;
const ceroNegativo = -0;
const enRealiadadNumero = NaN;
const mayorNumero = Number.MAX_VALUE;
const elNumeroMasGrande = Infinity;
const miembros = [
    entero,
    decimal,
    hexadecimal,
    binario,
    octal,
    ceroNegativo,
    enRealiadadNumero,
    mayorNumero,
    elNumeroMasGrande
];
miembros[0] = '12345';
console.log('[Ejercicio 1.4]', miembros);
//1.5
const secuencia = Array.from(Array(10).keys());
const animales = ['pinguino', 'oso hormiguero', 'zorro', 'jirafa'];
const cadenasYNumeros = [1, 'uno', 2, 'dos', 3, 'tres'];
const todosMisArreglos = [secuencia, animales, cadenasYNumeros];
console.log('Ejercicio 1.5', todosMisArreglos);
//1.6
const elementoInventario = ['tuerca', 11];
// despues lo desestructuramos
const array = ['tuerca'];
const [nombre, cantidad] = elementoInventario;
const mensaje = agregarInventario(nombre, cantidad);
console.log('[Ejercicio 1.6]', mensaje);
function agregarInventario(nombre, cantidad) {
    return `Se agregaron ${cantidad} ${nombre}s al inventario.`;
}
