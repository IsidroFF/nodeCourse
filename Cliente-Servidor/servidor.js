const HTTP = require('http');

const SERVIDOR = HTTP.createServer((req, res) => {
    console.log('==> res (solisitud)');
    res.setHeader('content-type', 'application/json');
    console.log(res.getHeaders());
    // console.log(res.statusCode);
    // res.statusCode = 404;
    // console.log(res.statusCode);
    // res.end('Hola mundo')
    // console.log('Nuevo solicitud');
    // res.end('Hola Mundo!');
})

const PUERTO = 3000;
SERVIDOR.listen(PUERTO, () => {
    console.log(`Estoy escuchando en el puerto ${PUERTO}...`);
});