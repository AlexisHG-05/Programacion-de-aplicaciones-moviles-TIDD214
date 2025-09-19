const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 35 },
  { nombre: "María", edad: 28 }
];

// codigo
const luis = personas.find(persona => persona.nombre === "Luis");
console.log("1. Persona encontrada con .find():");
console.log(luis); 

console.log("\n--\n"); 

console.log("2. Nombres y edades con .forEach():");
personas.forEach(persona => {
  console.log(`${persona.nombre} tiene ${persona.edad} años.`);
});

console.log("\n--\n"); 

const sumaDeEdades = personas.reduce((acumulador, persona) => {
  return acumulador + persona.edad;
}, 0);

console.log("3. Suma de edades con .reduce():");
console.log(`La suma total de las edades es: ${sumaDeEdades}`); // 85
