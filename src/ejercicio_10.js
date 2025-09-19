// Archivo: src/ejercicio_10.js

// Objeto de ejemplo
const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2022,
  color: "Rojo"
};

console.log("Objeto original:", coche);

// Object.keys() - obtener claves
const claves = Object.keys(coche);
console.log("Claves del objeto:", claves);

//  Object.values() - obtener valores
const valores = Object.values(coche);
console.log("Valores del objeto:", valores);

// Object.entries() - obtener pares clave-valor
const entradas = Object.entries(coche);
console.log("Pares clave-valor:", entradas);

//  Iterar sobre el objeto con forEach()
// Object.entries() devuelve un array, por eso se puede usar forEach
console.log("Iterando con forEach:");
Object.entries(coche).forEach(([clave, valor]) => {
  console.log(`${clave}: ${valor}`);
});
