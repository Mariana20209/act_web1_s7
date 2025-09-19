const lenguajes = ['JavaScript', 'Python', 'Java', 'C++', 'Go'];
console.log("Array original:", lenguajes);

// Extraer los primeros 3 lenguajes
const [lang1, lang2, lang3] = lenguajes;
console.log("Primeros 3 lenguajes:", lang1, lang2, lang3);


//  Extraer el primero y el último
const [primero, , , , ultimo] = lenguajes;
console.log("Primero:", primero, "Último:", ultimo);


//  Usar rest operator para separar el primero del resto
const [first, ...resto] = lenguajes;
console.log("Primero:", first);
console.log("Resto del array:", resto);

// Intercambiar dos variables usando desestructuración
let a = 10;
let b = 20;
console.log("Antes del intercambio: a =", a, ", b =", b);

// Intercambio
[a, b] = [b, a];
console.log("Después del intercambio: a =", a, ", b =", b);
