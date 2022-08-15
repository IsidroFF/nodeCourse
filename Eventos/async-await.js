function ordenarProductor(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando producto ${producto}`); //1 
    setTimeout(() => {
      if (producto === 'tazas') {
        resolve('producto ordenado');//3
      } else {
        reject('orden rechazada');
      }
    }, 3000);
  });
}

function procesarPedido(respuesta) {
  return new Promise(resolve => {
    console.log('Procesando respuesta');//4
    console.log(`La respuesta fue: "${respuesta}"`);//5
    setTimeout(() => {
      resolve('Gracias por su compra, disfrute su taza');//6
    }, 4000)
  });
}

// ordenarProductor('lap')
//   .then(respuesta => {
//     console.log('Respuesta recibida');//2
//     console.log(respuesta);
//     return procesarPedido(respuesta);
//   })
//   .then(respuestaProcesada => {
//     console.log(respuestaProcesada);
//   })
//   .catch(error => {
//     console.log(error);
//   })

async function realizarPedido(producto) {
  try {
    const respuesta = await ordenarProductor(producto);
    console.log('Respuesta recibida');
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  } catch (error) {
    console.log(error);
  }
}

realizarPedido('tazas');