const ventas = [
  { producto: "Camisa", precio: 20, cantidad: 2, fecha: "2023-10-01" },
  { producto: "Pantalones", precio: 40, cantidad: 1, fecha: "2023-10-15" },
  { producto: "Zapatos", precio: 60, cantidad: 1, fecha: "2023-10-30" },
];

//  Total de ingresos
const totalIngresos = ventas.reduce((total, venta) => total + (venta.precio * venta.cantidad), 0);
console.log("Total de ingresos en octubre de 2023:", totalIngresos);

// Producto más vendido (por cantidad)
const productoMasVendido = ventas.reduce((masVendido, venta) => {
  return (venta.cantidad > masVendido.cantidad) ? venta : masVendido;
});
console.log("Producto más vendido en octubre de 2023:", productoMasVendido.producto);

// Promedio de ingresos por venta
const promedioPorVenta = totalIngresos / ventas.length;
console.log("Promedio de ingresos por venta en octubre de 2023:", promedioPorVenta);
