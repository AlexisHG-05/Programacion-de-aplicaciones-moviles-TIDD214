const persona = {
    nombre : "Ivan Isay",
    edad : 37,
    direccion: 
    {
        ciudad: "Qro",
        pais: "MX"
    }
};

// Aplicamos la destrucutracion aqui
// Extrae,ps "nombre" y "edad" directamente.
// Para ciudad y direccion hacemos una destructuracion anidada
const {nombre, edad, direccion: {ciudad}} = persona;
console.log(`Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);
