// Importamos el módulo HTTP de Node.js, esencial para crear servidores web
const http = require('http');

// Configuramos el puerto y el host
const port = 8000;
const hostname = '0.0.0.0'; // 'localhost'

// El contenido HTML que queremos mostrar al usuario
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>Servidor JavaScript Local</title>
    <style>
        body { font-family: sans-serif; text-align: center; margin-top: 50px; background-color: #f0f0f0; }
        h1 { color: #2ecc71; }
        p { color: #34495e; }
    </style>
</head>
<body>
    <h1>¡Estoy en línea! 🌐</h1>
    <p>Este servidor web fue montado y ejecutado desde la terminal con Node.js.</p>
</body>
</html>
`;

// Creamos el servidor. Esta función se ejecuta cada vez que alguien visita el servidor.
const server = http.createServer((req, res) => {
    // 1. Establecemos el encabezado de la respuesta
    res.statusCode = 200; // Código de éxito
    res.setHeader('Content-Type', 'text/html');
    
    // 2. Enviamos el contenido HTML al navegador y finalizamos la respuesta
    res.end(htmlContent);
});

// Iniciamos el servidor para que escuche las peticiones en el puerto y host definidos
server.listen(port, hostname, () => {
    // Mensaje de confirmación en la terminal
    console.log(`✅ Servidor iniciado y escuchando en http://${hostname}:${port}/`);
    console.log('Para detenerlo, vuelve aquí y presiona Ctrl + C.');
  
});
