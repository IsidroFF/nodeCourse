const EventEmitter = require("events");
const emisorProductos = new EventEmitter();

emisorProductos.on("compra", (total, descuento) => {
  console.log(`Se ha realizado una compra por $${total} pesos, descuento $${descuento}, total $${total-descuento}`);
})

emisorProductos.emit("compra", 1234 , 456);