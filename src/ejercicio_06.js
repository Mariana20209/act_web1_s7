// Array inicial
let numeros = [1, 2, 3, 4, 5];
console.log("Array inicial:", numeros);

// push() y pop()
// push() agrega al final
numeros.push(6);
console.log("Después de push(6):", numeros);

// pop() quita del final
let eliminadoFinal = numeros.pop();
console.log("Después de pop():", numeros);
console.log("Elemento eliminado del final:", eliminadoFinal);

// unshift() agrega al inicio
numeros.unshift(0);
console.log("Después de unshift(0):", numeros);

// shift() quita del inicio
let eliminadoInicio = numeros.shift();
console.log("Después de shift():", numeros);
console.log("Elemento eliminado del inicio:", eliminadoInicio);

// insertar en posición específica
numeros.splice(2, 0, 99); // inserta 99 en índice 2 sin eliminar
console.log("Después de splice(2, 0, 99):", numeros);

// extraer porción sin modificar original
let subArray = numeros.slice(1, 4); // desde índice 1 hasta 3
console.log("Resultado de slice(1, 4):", subArray);
console.log("Array original después de slice():", numeros);
