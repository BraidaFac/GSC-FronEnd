"use strict";
//1
let pi = 3.14159;
let tau = pi * 2;
console.log('[Ejercicio 1.1]', `${tau} es ${pi} veces el dos.`);
//2
let torta;
torta = 'arandanos';
console.log('[Ejercicio 1.2]', `Me gusta comer torta con sabor a ${torta}.`);
//3
let esPablo = true;
console.log('[Ejercicio 1.3]', `${esPablo ? 'Oh, hola Pablo' : 'Quien sos vos?'}`);
//4
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
//5
const secuencia = Array.from(Array(10).keys());
const animales = ['pinguino', 'oso hormiguero', 'zorro', 'jirafa'];
const cadenasYNumeros = [1, 'uno', 2, 'dos', 3, 'tres'];
const todosMisArreglos = [secuencia, animales, cadenasYNumeros];
console.log('Ejercicio 1.5', todosMisArreglos);
//6
const elementoInventario = ['tuerca', 11];
// despues lo desestructuramos
const array = ['tuerca'];
const [nombre, cantidad] = elementoInventario;
const mensaje = agregarInventario(nombre, cantidad);
console.log('[Ejercicio 1.6]', mensaje);
function agregarInventario(nombre, cantidad) {
    return `Se agregaron ${cantidad} ${nombre}s al inventario.`;
}
//Tipos
//1
function doStuff(value) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase().split('').join(' '));
    }
    else if (typeof value === 'number') {
        console.log(value.toPrecision(5));
    }
    value; // coloque el cursor sobre `valor` aqui
}
doStuff(2);
doStuff(22);
doStuff(222);
doStuff('h e l lo');
doStuff(true);
doStuff({});
console.log('[Ejercicio 4.1]');
class Bird {
    constructor(species) {
        this.species = species;
    }
    layEggs() {
        console.log('Poniendo huevos de aves.');
    }
    fly(height) {
        console.log(`Volando a la altura de ${height} metros.`);
    }
}
;
class Fish {
    constructor(species) {
        this.species = species;
    }
    layEggs() {
        console.log('Poniendo huevos de pescado.');
    }
    swim(depth) {
        console.log(`Nadando a una profundidad de ${depth} metros.`);
    }
}
function getRandomAnimal() {
    const animals = [
        new Bird('puffin'),
        new Bird('kittiwake'),
        new Fish('sea robin'),
        new Fish('leafy seadragon'),
    ];
    return animals[Math.floor(Math.random() * animals.length)];
}
function interrogateAnimal(animal = getRandomAnimal()) {
    animal.layEggs();
    animal instanceof Fish ? animal.swim(10) : animal.fly(10);
    return animal.species;
}
console.log(`Tenemos un ${interrogateAnimal()} en nuestras manos!`);
console.log('[Ejercicio 4.4]');
