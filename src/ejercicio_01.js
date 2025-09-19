const inventario = [
    { id: 1, nombre: "Laptop Pro", precio: 1000000, categoria: "Electrónica", stock: 10 },
    { id: 2, nombre: "Laptop Pro", precio: 1000000, categoria: "Electrónica", stock: 10 },
    { id: 3, nombre: "camiseta eco", precio: 50000, categoria: "Ropa", stock: 50 },
    { id: 4, nombre: "Nike Air Max 270", precio: 720000, categoria: "Calzado", stock: 20 },
    { id: 5, nombre: "Samsung Smart TV 55", precio: 2800000, categoria: "Electrónica", stock: 5 },
];
console.log("inventario completo:");
console.log(inventario);

const totalProdctos = inventario.reduce((total, producto) => total + producto.stock, 0);
console.log("Total de productos en inventario:", totalProdctos);

const valorTotalInventario = inventario.reduce((total, producto) => total + (producto.precio * producto.stock), 0);
console.log("Valor total del inventario:", valorTotalInventario);