const promesaCumplida = false;

const promesaJS = new Promise((resolve, reject) => {
  setTimeout(() => {
    if(promesaCumplida){
      resolve("Promesa cumplida");
    } else {
      reject("Me fallaste");
    }
  }, 3000)// timeout
});// promesaJS

const manejarPromesaCumplida = (valor) => {
  console.log(valor);
};

const manejarPromesaRechazada = (razonRechazo) => {
  console.log(razonRechazo);
};

promesaJS.then(manejarPromesaCumplida, manejarPromesaRechazada);

// promesaJS.then((valor) => {
//   console.log(valor);
// });