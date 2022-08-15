const statusPedido = () => {
  return Math.random() < 0.8;
};

const ordenPizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (statusPedido()) {
      resolve("Pizza en camino");
    } else {
      reject("Me comi tu pizza");
    }
  }, 3000)// timeout
});// promesaJS

//--------------------------------------------------
const manejarPedido = (mensajeConfirmacion) => {
  console.log(mensajeConfirmacion);
};

const rechazarPedido = (mensajeRechazo) => {
  console.log(mensajeRechazo);
};

ordenPizza.then(manejarPedido, rechazarPedido);
//---------------------------------------------------
ordenPizza
  .then((mensajeConfirmacion) => {
    console.log(mensajeConfirmacion)
  })
  .then(null, (mensajeRechazo) => {
    console.log(mensajeRechazo)
  });
//---------------------------------------------------
ordenPizza
  .then((mensajeConfirmacion) => {
    console.log(mensajeConfirmacion)
  })
  .catch((mensajeRechazo) => {
    console.log(mensajeRechazo)
  });
//---------------------------------------------------