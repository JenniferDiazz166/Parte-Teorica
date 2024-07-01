const inserts = [
    {
      tabla: 'usuarios',
      datos: [
        { id: 1, nombre: 'Juan Pérez', email: 'juan.perez@example.com', edad: 30 },
        { id: 2, nombre: 'Ana López', email: 'ana.lopez@example.com', edad: 25 },
        { id: 3, nombre: 'Carlos García', email: 'carlos.garcia@example.com', edad: 28 },
        { id: 4, nombre: 'Laura Fernández', email: 'laura.fernandez@example.com', edad: 32 },
        { id: 5, nombre: 'Marta Sánchez', email: 'marta.sanchez@example.com', edad: 27 }
      ]
    },
    {
      tabla: 'productos',
      datos: [
        { id: 1, nombre: 'Laptop', precio: 1500, stock: 10 },
        { id: 2, nombre: 'Smartphone', precio: 800, stock: 20 },
        { id: 3, nombre: 'Tablet', precio: 500, stock: 15 },
        { id: 4, nombre: 'Monitor', precio: 200, stock: 25 },
        { id: 5, nombre: 'Teclado', precio: 50, stock: 30 }
      ]
    },
    {
      tabla: 'pedidos',
      datos: [
        { id: 1, id_usuario: 1, id_producto: 2, cantidad: 1 },
        { id: 2, id_usuario: 3, id_producto: 1, cantidad: 2 },
        { id: 3, id_usuario: 4, id_producto: 4, cantidad: 1 },
        { id: 4, id_usuario: 2, id_producto: 3, cantidad: 3 },
        { id: 5, id_usuario: 5, id_producto: 5, cantidad: 2 }
      ]
    },
    {
      tabla: 'categorias',
      datos: [
        { id: 1, nombre: 'Electrónica' },
        { id: 2, nombre: 'Hogar' },
        { id: 3, nombre: 'Jardinería' },
        { id: 4, nombre: 'Ropa' },
        { id: 5, nombre: 'Deportes' }
      ]
    },
    {
      tabla: 'reviews',
      datos: [
        { id: 1, id_producto: 1, id_usuario: 2, calificacion: 5, comentario: 'Excelente producto' },
        { id: 2, id_producto: 2, id_usuario: 3, calificacion: 4, comentario: 'Muy buen teléfono' },
        { id: 3, id_producto: 3, id_usuario: 1, calificacion: 3, comentario: 'Cumple su función' },
        { id: 4, id_producto: 4, id_usuario: 4, calificacion: 4, comentario: 'Buena calidad' },
        { id: 5, id_producto: 5, id_usuario: 5, calificacion: 5, comentario: 'Perfecto para el precio' }
      ]
    }
  ];
  
  console.log(inserts);
  