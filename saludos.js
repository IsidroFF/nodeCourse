function saludar(nombre){
    return `Hola ${nombre}`;
}

function saludarHolaMundo(){
    return "Hola, Mundo!";
}

//Creamos un "paquete de exportacion"
//module.exports.saludar = saludar;
//module.exports.saludarHolaMundo = saludarHolaMundo;

module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo
};