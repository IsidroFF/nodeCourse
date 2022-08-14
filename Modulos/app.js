const fs = require("fs");

fs.unlink("index.html", (err) => {
  if(err){
    throw err;
  }
  console.log("Archivo eliminado exitosamente");
});

fs.writeFile("index.html", "Contenido borrado", (err) => {
  if(err){
    throw err;
  }
  console.log("Archivo actualizado exitosamente");
});

fs.appendFile("index.html", "<p>Actualizacion 1.3 ...</p>", (err) => {
  if(err){
    throw err;
  }
  console.log("Archivo actualizado");
});

fs.rename("index.html", "main.html", (err) => {
  if(err){
    throw err;
  }
  console.log("Nombre cambiado exitosamente");
});

fs.readFile("indx.html", "utf-8", (err, contenido) => {
  if(err){
    console.log("Ocurrio un Error! \n" + err);
  }else{
    console.log(contenido);
  }
});


function suma(a, b){
  console.log(a + b);
}

setTimeout(suma, 1000, 1, 2);
setInterval(suma,500, 1, 904);

function mostrarTema(tema){
  console.log(`El tema que estas aprendiendo es ${tema}`);
}

console.log("Antes");
setImmediate(mostrarTema, "JS");
console.log("Despues")

const os = require("os");

console.log(os.type());
console.log(os.homedir());
console.log(os.uptime());
console.log(os.userInfo());

console.log("Hola, mundo");
console.warn("Error...");
console.error("QUEEE ES ESOOOOO!!!");
console.error(new Error("AYUDA!!!!"));

console.log(process.env);
console.log(process.argv);
console.log(process.argv[2]);
console.log(process.argv[3]);
for (let i = 2; i < process.argv.length; i++){
    console.log(process.argv[i]);
}
console.log(process.memoryUsage());