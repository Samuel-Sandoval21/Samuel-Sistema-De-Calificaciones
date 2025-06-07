//Sistema De Calificaciones

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function preguntar(pregunta) {
  return new Promise((resolve) => {
    rl.question(pregunta, (respuesta) => {
      resolve(respuesta.trim());
    });
  });
}

async function agregarEstudiante() {
  const nombre = await preguntar("Nombre del estudiante: ");
  const nota1 = parseFloat(await preguntar("Nota 1: "));
  const nota2 = parseFloat(await preguntar("Nota 2: "));
  const nota3 = parseFloat(await preguntar("Nota 3: "));

  if (!nombre || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    console.log("❌ Por favor, completa todos los campos correctamente.");
    rl.close();
    return;
  }

  if ([nota1, nota2, nota3].some((n) => n < 1 || n > 10)) {
    console.log("❌ Las notas deben estar entre 1 y 10.");
    rl.close();
    return;
  }

  const promedio = (nota1 + nota2 + nota3) / 3;
  const estado = promedio >= 7 ? "Aprobado ✅" : "Reprobado ❌";

  console.log(`\n📋 Resultado:`);
  console.log(`Nombre: ${nombre}`);
  console.log(`Promedio: ${promedio.toFixed(2)}`);
  console.log(`Estado: ${estado}`);

  rl.close();
}

agregarEstudiante();
