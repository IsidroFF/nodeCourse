const HTTP = require('http');
const CURSOS = require('./cursos');

const servidor = HTTP.createServer((req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      return manejarSolicitudGET(req, res);
    case 'POST':
      return manejarSolicitudPOST(req, res);
    default:
      res.statusCode = 501;
      res.end(`El metodo usado no puede ser usado por el servidor: ${method}`);
  }

});

function manejarSolicitudGET(req, res){
  const PATH = req.url;

  if(PATH === '/'){
    return res.end('Primer servidor y API en NodeJS');
  } 
  else if(PATH === '/cursos'){
    return res.end(JSON.stringify(CURSOS.infoCursos));
  } 
  else if(PATH === '/cursos/programacion'){
    return res.end(JSON.stringify(CURSOS.infoCursos.programacion));
  }

  res.statusCode = 404;
  return es.end('Recurso no encontrado');
}

function manejarSolicitudPOST(req, res){
  const PATH = req.url;
  //console.log(PATH)
  if(PATH === '/cursos/programacion'){
    let cuerpo = '';

    req.on('data', contenido => {
      cuerpo += contenido.toString();
    });

    req.on('end', () => {
      console.log(cuerpo);
      console.log(typeof cuerpo);
      res.end('El servidor recibio la solicitud POST');
    })
    // return res.end('El servidor recibio la solicitud POST');
  }
}


const PUERTO = 3000;

servidor.listen(PUERTO, () => {
  console.log(`Servidor en el puerto ${PUERTO}`);
});