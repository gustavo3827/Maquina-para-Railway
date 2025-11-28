require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());

app.use(
    cors({
        origin: "https://alvinspizzeria.netlify.app",
    })
// Importa el módulo HTTP de Node.js, necesario para crear el servidor web
const http = require('http');

// Define el puerto donde escuchará el servidor
const port = 3000;
// Define el host local
const hostname = '127.0.0.1'; // localhost

// El mensaje que se mostrará en la web, escrito en HTML
const htmlMessage = `
<!DOCTYPE html>
<html>
<head>
    <title>Servidor Local</title>
</head>
<body>
    <h1>¡Estoy en línea! (JavaScript/Node.js)</h1>
    <p>Este es un servidor web simple montado con Node.js.</p>
</body>
</html>
`;

// Crea el servidor
const server = http.createServer((req, res) => {
    // Configura el encabezado de la respuesta HTTP
    // Código de estado 200 (OK)
    // Tipo de contenido: HTML
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    
    // Envía el mensaje HTML como cuerpo de la respuesta
    res.end(htmlMessage);
});

// Hace que el servidor escuche las peticiones en el puerto y host definidos
server.listen(port, hostname, () => {
    // Este callback se ejecuta una vez que el servidor se inicia correctamente
    console.log(`✅ Servidor iniciado correctamente en http://${hostname}:${port}/`);
    console.log('Presiona Ctrl+C para detener el servidor.');
});
