function saludar(nombre){
    return "Hola ${nombre}";
}
//Creamos un "paquete de exportacion"
module.exports.saludar = saludar;