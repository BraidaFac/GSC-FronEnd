//Tipos
//4.0
// function doStuff(value: any): void {
//     if (typeof value === 'string') {
//     console.log(value.toUpperCase().split('').join(' '));
//     } else if (typeof value === 'number') {
//     console.log(value.toPrecision(5));
//     }

//     value; // coloque el cursor sobre `valor` aqui
//     }
    
// doStuff(2);
// doStuff(22);
// doStuff(222);
// doStuff('h e l lo');
// doStuff(true);
// doStuff({});
    
// console.log('[Ejercicio 4.1]');

//  //4.1
//  interface EggLayer {
//  layEggs(): void;
//  }
//  interface Flyer {
//  fly(height: number): void;
//  }
//  interface Swimmer {
//     swim(depth: number): void;
//      } 
        
//      // agregar alias de tipo(s) aqui
//      type BirdLike= EggLayer & Flyer;
//      type FishLike= EggLayer & Swimmer;
     
//      class Bird implements BirdLike {
//      constructor(public species: string) { }
    
//      layEggs(): void {
//      console.log('Poniendo huevos de aves.');
//      }
    
//      fly(height: number): void {
//      console.log(`Volando a la altura de ${height} metros.`);
//      }
//      };
    
//      class Fish implements FishLike {
//      constructor(public species: string) { }
    
//      layEggs(): void {
//      console.log('Poniendo huevos de pescado.');
//      }
    
//      swim(depth: number): void {
//      console.log(`Nadando a una profundidad de ${depth} metros.`);
//      }
//      }
    
//      function getRandomAnimal() : Bird|Fish{
//      const animals =[
//      new Bird('puffin'),
//      new Bird('kittiwake'),
//      new Fish('sea robin'),
//      new Fish('leafy seadragon'),
//      ];
    
//      return animals[Math.floor(Math.random() * animals.length)];
//      }
    
//      function interrogateAnimal(animal = getRandomAnimal()) {
//         animal.layEggs();
//         animal instanceof Fish ? animal.swim(10):animal.fly(10); 
       
//      return animal.species;
    
//      }
//      console.log(`Tenemos un ${interrogateAnimal()} en nuestras manos!`);
//      console.log('[Ejercicio 4.4]');

//      //4.2
     


//      function padLeft(value: string, padding: number | string): string {
//         // si padding es un numero, return `${Array(padding + 1).join(' ')}${value}`
//         if(typeof (padding )==='string')   return padding + value;
//         // si padding es una cadena, return padding + value
        
//         else return `${Array(padding as number+ 1).join(' ')}${value}`
//             }
    
//         console.log('[Ejercicio 4.2]', `
//         ${padLeft('', 0)},
//         ${padLeft('', '')},
//         ${padLeft('', '')},
//         ${padLeft('', '')},
//         ${padLeft('', '')}`);

//         //4.3

// type elemntos = (number|number[])[];
// const numbers :elemntos = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];

//  function flatten<T>(array:(T|T[])[]) {
//  const flattened = []; 
//  for (const element of array) { 
//     if (Array.isArray(element)) {
//           // any[] 
//          flattened.push(...element);
//  }
//   else {
//   // any
//  flattened.push(element);
//  }
//  }

//  return flattened;
//  }

//  const flattenedNumbers = flatten(numbers);

//  console.log('[Ejercicio 4.3]', flattenedNumbers);

 //4.4

type BirdLike= EggLayer & Flyer;
type FishLike= EggLayer & Swimmer;

type Animal = Bird|Fish;


 interface EggLayer {
     layEggs(): void;
     }

 interface Flyer {
 fly(height: number): void;
 }

 interface Swimmer {
     swim(depth: number): void;
     }
    
     // agregar alias de tipo(s) aqui
    
     class Bird implements BirdLike {
     constructor(public species: string) { }
    
     layEggs(): void {
     console.log('Poniendo huevos de aves.');
     }
    
     fly(height: number): void {
     console.log(`Volando a la altura de ${height} metros.`);
     }
     };
    
     class Fish implements FishLike {
     constructor(public species: string) { }
    
     layEggs(): void {
     console.log('Poniendo huevos de pescado.');
     }
    
     swim(depth: number): void {
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
    
     function interrogateAnimal( animal: Animal = getRandomAnimal()):string {

        animal instanceof  Fish ? animal.swim(10): animal.fly(10);
      // se llama solo si es un pez
     // se llama solo si es un pajaro
    

    return animal.species;
     }
    
     console.log('[Ejercicio 4.4]',
     `Tenemos un ${interrogateAnimal()} en nuestras manos!`);
 
    
    
