
let nombreW = "Armando"; // Usamos let porque el nombre se reasigna más adelante
const edad = 25; 

nombre = "Ana Maria"; 

// Se crea el saludo usando los valores actuales de las variables
const saludo = `Hola, ${nombre}. Tienes ${edad} años.`;
console.log(saludo); 




let precio = 150;
const descuento = 20;
let totali = precio - descuento;

precio = 120;
total = precio - descuento; // Reasignando el valor a 'total'

console.log(total); // El resultado en consola sería 100

const calcularIVA = precio => precio * 0.16;
console.log(calcularIVA(precio))


const generarEmail = (nombre, apellido) => `${nombre.toLowerCase()}.${apellido.toLowerCase()}@ejemplo.com`;

// Y así la probamos:
let email1 = generarEmail("Juan", "Perez");
let email2 = generarEmail("MARIA", "GOMEZ");

console.log(email1); // Muestra: juan.perez@ejemplo.com
console.log(email2); // Muestra: maria.gomez@ejemplo.com

const personae = {
  nombre: "Ivan Isay",
  edad: 37,
  direccion: {
    ciudad: "Qro",
    pais: "MX"
  }
};

// 1. Aplica desestructuración en una sola línea
const { nombre1, edad1, direccion: { ciudad } } = persona;

// 2. Imprime el mensaje usando las nuevas variables
const mensaje = `Me llamo ${nombre1}, tengo ${edad1} años y vivo en ${ciudad}.`;

console.log(mensaje);


const productos = [
  { nombre: "Laptop", precio: 12000 },
  { nombre: "Mouse", precio: 250 },
  { nombre: "Teclado", precio: 750 },
  { nombre: "Monitor", precio: 3000 }
];

const nombres = productos
  .filter(producto => producto.precio > 1000) 
  .map(producto => producto.nombre);           

console.log(nombres); 


//[4:04 p.m., 1/10/2025] Yayo: Debes decidir si conviene usar let o const.
let nombre = "Yael";   // cambiará más adelante
const PI = 3.1416;       // nunca debe cambiar

nombre = "Yael Zúñiga";

console.log(nombre, PI);

//Completa para que sea una arrow function que devuelva el doble del número. 
const doble = (n,n) => n*2;

console.log(doble(5)); // 10

// Usa destructuración para sacar el nombre y edad. 
const persona = { nombre: "Ana", edad: 28, ciudad: "México" };

const { __, __ } = persona;

console.log(nombre, edad); // Ana 28
[4:04 p.m., 1/10/2025] Yayo: Saca los dos primeros colores en variables separadas. const colores = ["rojo", "azul", "verde"];

// completa aquí
const [__, __] = colores;

console.log(color1, color2); // rojo azul
[4:05 p.m., 1/10/2025] Yayo: Queremos un nuevo arreglo con los números multiplicados por 3. const numeros = [1, 2, 3, 4];

const triples = __(n => n * 3);

console.log(triples); // [3, 6, 9, 12]
[4:05 p.m., 1/10/2025] Yayo: Queremos solo las palabras que tengan más de 4 letras. const palabras = ["sol", "estrella", "luz", "planeta"];

const largas = __(p => p.length > 4);

console.log(largas); // ["estrella", "planeta"]
[4:05 p.m., 1/10/2025] Yayo: Encuentra el primer número negativo en el arreglo. const numeros = [5, 8, -3, 9, -1];

const negativo = __(n => n < 0);

console.log(negativo); // -3
[4:05 p.m., 1/10/2025] Yayo: Calcula la suma de todos los precios. const precios = [100, 200, 50];

// completa aquí
const total = __((acum, p) => acum + p, 0);

console.log(total); // 350
[4:06 p.m., 1/10/2025] Yayo: Imprime "Alumno: X" para cada nombre. const alumnos = ["Laura", "Pedro", "Marta"];

// completa aquí
__(a => {
  console.log("Alumno: " + a);
});
[4:06 p.m., 1/10/2025] Yayo: Simula una petición a la API que devuelve "Datos listos" después de 2 segundos. function simularAPI() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Datos listos"), 2000);
  });
}

// completa aquí
async function obtenerDatos() {
  const resultado = __ simularAPI();
  console.log(resultado);
}

obtenerDatos();