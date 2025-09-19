const inventario = [
    { id: 1, nombre: "Laptop Pro", precio: 1000000, categoria: "Electrónica", stock: 10 },
    { id: 2, nombre: "Laptop Pro", precio: 1000000, categoria: "Electrónica", stock: 10 },
    { id: 3, nombre: "camiseta eco", precio: 50000, categoria: "Ropa", stock: 50 },
    { id: 4, nombre: "Nike Air Max 270", precio: 720000, categoria: "Calzado", stock: 20 },
    { id: 5, nombre: "Samsung Smart TV 55", precio: 2800000, categoria: "Electrónica", stock: 5 },
];

const electronica = inventario.filter(producto => producto.categoria === "Electrónica");
console.log("Productos en la categoría Electrónica:");
console.log(electronica);

const stockBajo = inventario.filter(producto => producto.stock < 10);
console.log("Productos con stock menor a 10:");
console.log(stockBajo);

const preciosAltos = inventario.filter(producto => producto.precio > 500000);
console.log("Productos con precio mayor a 500,000:");
console.log(preciosAltos);  
