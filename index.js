const express = require('express');
const app = express();
const port = 3000;

// Middleware para manejar JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi API!');
});

// Ejemplo de ruta para obtener datos
app.get('/api/usuarios', (req, res) => {
  const usuarios = [
    { id: 1, nombre: 'Daniel' },
    { id: 2, nombre: 'María' },
  ];
  res.json(usuarios);
});

// Ejemplo de ruta para crear datos
app.post('/api/usuarios', (req, res) => {
  const nuevoUsuario = req.body; // Obtén los datos enviados en el cuerpo de la solicitud
  nuevoUsuario.id = Date.now(); // Simula un ID único
  res.status(201).json({
    mensaje: 'Usuario creado exitosamente',
    usuario: nuevoUsuario,
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
