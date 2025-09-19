// Objeto persona con propiedades anidadas
const persona = {
  nombre: "Mariana",
  edad: 19,
  direccion: {
    ciudad: "Copacabana",
    pais: "Colombia"
  },
  contacto: {
    email: "mariana@gmail.com",
    telefono: "123456789"
  }
};

console.log("Objeto persona original:", persona);

// Desestructuración básica
const { nombre, edad } = persona;
console.log("Desestructuración básica - nombre:", nombre, ", edad:", edad);
// Renombrado de variables
const { nombre: nombrePersona, edad: edadPersona } = persona;
console.log("Renombrado de variables - nombrePersona:", nombrePersona, ", edadPersona:", edadPersona);


// Valores por defecto
const { profesion = "Estudiante" } = persona;
console.log("Valor por defecto - profesion:", profesion);

// Desestructuración anidada
const { direccion: { ciudad, pais }, contacto: { email, telefono } } = persona;
console.log("Desestructuración anidada - ciudad:", ciudad, ", pais:", pais);
console.log("Desestructuración anidada - email:", email, ", telefono:", telefono);

// Rest operator en objetos
const { nombre: n, edad: e, ...resto } = persona;
console.log("Rest operator - resto del objeto:", resto);
