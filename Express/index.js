const express = require('express');
const app = express();

const {infoCursos} = require('./cursos');

// routing
//Pagina principal
app.get('/', (req, res) => {
  res.send('Mi primer servidor con express');
});

//Pagina de cursos
app.get('/api/cursos', (req,res) => {
 res.send(infoCursos);
});

//Cursos de programacion
app.get('/api/cursos/programacion', (req,res) => {
  res.send(infoCursos.programacion);
});

//Cursos de matematicas
app.get('/api/cursos/matematicas', (req,res) => {
  res.send(infoCursos.matematicas);
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});