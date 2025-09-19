const estudiantes = [
    { nombre: "Ana", edad: 20, calificaciones: [40, 35, 38] },
    { nombre: "Luis", edad: 22, calificaciones: [50, 25, 30] },
    { nombre: "Marta", edad: 19, calificaciones: [39, 10, 49] },
    { nombre: "Carlos", edad: 21, calificaciones: [30, 35, 30] }
];

const promedioEstudiantes = estudiantes.map(estudiante => estudiante.nombre);
console.log(soloNombres);


const promedios = estudiantes.map(estudiante => {
    const suma = estudiante.calificaciones.reduce((acc, calificacion) => acc + calificacion, 0);
    const promedio = suma / estudiante.calificaciones.length;

    return suma / estudiante.calificaciones.length;
});
console.log(promedios); 

const estudiantesConEstado = estudiantes.map(estudiante => {
   
    const suma = estudiante.calificaciones.reduce((acc, calificacion) => acc + calificacion, 0);
    const promedio = suma / estudiante.calificaciones.length;
    
   
    const nuevoEstudiante = { ...estudiante };
    
    // Agrega la propiedad 'estado' según el promedio
    nuevoEstudiante.estado = promedio >= 70 ? "Aprobado" : "Reprobado";
    
    return nuevoEstudiante;
});
console.log("\nArray de estudiantes con la propiedad 'estado':");
console.log(estudiantesConEstado);

