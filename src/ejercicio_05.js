
const usuarios = [
  { id: 1, nombre: 'Alice', email: "alice@gmail.com", active: true },
  { id: 2, nombre: 'Bob', email: "bob@gmail.com", active: true },
  { id: 3, nombre: 'Charlie', email: "charlie@gmail.com", active: false }
];


const usuariosActivos = usuarios.filter(usuario => usuario.active);


const nombresActivos = usuariosActivos.map(usuario => usuario.nombre);


console.log("Usuarios activos completos:");
console.log(usuariosActivos);

console.log("Nombres de usuarios activos:");
console.log(nombresActivos);
