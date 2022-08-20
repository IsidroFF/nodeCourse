const http = require('http');

const servidor = http.createServer((req,res) => {
  res.end('Hola, Isidro');
});

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
  console.log(`El servidor esta en escucha el puerto ${PUERTO}`);
});

