function simularPeticionAPI() 
{
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Datos recibidos correctamente");
    }, 5000);
  });
}
async function obtenerDatos() {
  console.log("Iniciando petición de datos...");

  const respuesta = await simularPeticionAPI();
  
  console.log(respuesta);
  console.log("Petición finalizada.");
}

obtenerDatos();