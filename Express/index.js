const express = require('express');
const app = express();

const {infoCursos} = require('./datos/cursos');

//Router
const routerProgramacion = require('./routers/programacion');
app.use('/api/cursos/programacion', routerProgramacion);

const routerMatematicas = require('./routers/matematicas');
app.use('/api/cursos/matematicas', routerMatematicas);

//Pagina principal
app.get('/', (req, res) => {
  res.send('Mi primer servidor con express');
});

//Pagina de cursos
app.get('/api/cursos', (req,res) => {
 res.send(infoCursos);
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});