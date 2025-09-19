// Archivo: src/ejercicio_07.js

// 1️⃣ Números desordenados
let numeros = [5, 2, 9, 1, 7];
console.log("Array de números original:", numeros);

// Orden ascendente
numeros.sort((a, b) => a - b);
console.log("Números orden ascendente:", numeros);

// Orden descendente
numeros.sort((a, b) => b - a);
console.log("Números orden descendente:", numeros);

// ------------------------------
// 2️⃣ Nombres de personas
let nombres = ["Carlos", "Ana", "Beatriz", "David"];
console.log("Array de nombres original:", nombres);

// Orden alfabético ascendente
nombres.sort();
console.log("Nombres orden alfabético:", nombres);

// Orden alfabético descendente
nombres.sort().reverse();
console.log("Nombres orden alfabético inverso:", nombres);

//  Objetos con propiedad edad
let personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 30 },
  { nombre: "Pedro", edad: 20 }
];
console.log("Array de personas original:", personas);

// Ordenar por edad ascendente
personas.sort((a, b) => a.edad - b.edad);
console.log("Personas ordenadas por edad ascendente:", personas);

// Ordenar por edad descendente
personas.sort((a, b) => b.edad - a.edad);
console.log("Personas ordenadas por edad descendente:", personas);

// 4️⃣ Uso de reverse() para invertir cualquier array
let ejemploReverse = [1, 2, 3, 4, 5];
console.log("Array original para reverse():", ejemploReverse);

ejemploReverse.reverse();
console.log("Array invertido con reverse():", ejemploReverse);
