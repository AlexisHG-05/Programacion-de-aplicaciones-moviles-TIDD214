import { restar } from './utils.js';

console.log("Pruebas parar la funcion restar:");

const resultado1 = restar(10, 5);
console.log(`Prueba 1:10-5= ${resultado1}`); 

const resultado2 = restar(20, 30);
console.log(`Prueba 2:20-30= ${resultado2}`); 

const resultado3 = restar(-5, -5);
console.log(`Prueba 3:-5-5= ${resultado3}`); 

console.log("Pruebas ejecutadas de manera correcta.");