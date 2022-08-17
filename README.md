# NOTAS DE NodeJS

<font size = 5> **INDICE** </font>
 
- [Modulos](#modulos-nodejs)
- [NPM](#npm-node-package-manager)
- [JSON](#json)
- [Eventos](#eventos)
- [Promesas](#promesas)
- [Modelo Cliente-Servidor](#modelo-cliente-servidor)
- [HTTP](#http-hypertext-transfer-protocol)
- [URL](#url)
- [Routing](#routing)

## Modulos NodeJS

- Funcionalidad organizada en uno o vario archivos de JS que puede 
ser utilizada en una aplicacion
- Representa las mismas ventajas que la programacion orientada a objetos

> Importar y exportar
> 
>**Imporar:** Brinda acesso a funciones y elementos definidoa en otro modulos
>
>**Exportar:** Para porder importar un modulo, este debe ser EXPORTARDO desde
> su archivo de origen

Es posible exportar diversas funciones de un solo archivo, y asignarlos a una
constante en la aplicacion principal (mas menos~)

- Agregar modulos en el codigo
``` javascript
    const name = require("moduleName"); // Modulos integrados o instalados
    const name = require("./moduleName"); // Modulos creados por el usuario
```

### **Modulos build-in** (incorporados)

Modulos que pueden ser usados sin la necesidad de ser instalados
- Ejemplo: http/s, file system, operative system, path

### **Modulo console**

Es un modulo build-in que implementa funcionalidades similares a la consola de
un navegador web 

### **Modulo process**

Modulo que permite mostrar informacion del procesos que se esta ejecutando

### **Modulo OS**

Permite obtener informacion sobre el sistema operativo en el cual se ejecuta
la aplicacion

### **Modulo Timer**

Contiene funciones que ejecutan codigo luego de cierto periodo de tiempo
- Funciones utiles:  setTimeout, setImmediate, setInterval

### **Modulo fs**

Contiene funcionalidades que permiten utilizar el sistema de archivos
- Ejemplo: Leer, Copiar, Mover, Eliminar, Modificar
> Por defecto son metodos asincronos, pero pueden ser utilizados como medotos sincronos agregandoles la palabra Sync al final 
> ``` javascript
>     fs.rename();
>     fs.renameSync();
> ```

---

## NPM (node package manager)

Es un contenedor de paquetes que pueden ser instalados en NodeJS

``` bash
     npm install express //Instalar
     npm uninstall express //Desinstalar
     npm install express@4.15.2 //Instalar version específica
```

---

## JSON

Es un formato de texto usado para almacenar y transportar informacion

- Permite almacenar objetos de JavaScript a texto
- Los datos se representan como pares clave-valor 


--- 

## Eventos

Accion que se realiza con la aplicacion 

- **Asincronos:**
    Es un evento que sucede en paralelo a la ejecucion de la aplicacion

- **Sincronos:**
    Es un evento que bloquea la ejecucion de la aplicacion cuando se esta
    realizando, cuando se termina la aplicacion continua su funcionamiento
    normal

### **Emitters** (emisores)

Objetos que emiten eventos nombrados y llaman a funciones especificas cuando
ocurren 

---

## Promesas

Es un objeto que representa el resultado, si este se cumple o no, este objeto
se asocia a una callback function

``` javascript
    const ordenPizza = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (statusPedido()) {
            resolve("Pizza en camino");
            } else {
            reject("Me comi tu pizza");
            }
        }, 3000)// timeout
    });// promesaJS
```

### **Callback function**

Funcion que se pasa a otra funcion como argumento y luego se ejecuta dentro de 
la funcion externa

``` javascript
    ordenPizza
    .then((mensajeConfirmacion) => {
        console.log(mensajeConfirmacion)
    })
    .catch((mensajeRechazo) => {
        console.log(mensajeRechazo)
    });
```

### **Async-await**

Permite escribir codigo asincrono, como si fuera codigo sincrono, haciendo mas
sencilla su lectura y utilizacion

``` javascript
        async function realizarPedido(producto) {
            try {
                const respuesta = await ordenarProductor(producto); //Funciones asincrona
                console.log('Respuesta recibida');
                const respuestaProcesada = await procesarPedido(respuesta); //Funcion asincrona
                console.log(respuestaProcesada);
            } catch (error) {
                console.log(error);
            }
        }

        realizarPedido('tazas');
```
---

## Modelo Cliente-Servidor

Es la manera que usamos para acceder a internet  y obtener recursos
e informacion
- **Protocolo:** Conjunto de reglas que permiten transmitir informacion
entre dispositivos de una red 

### **Cliente**

Navegador desde el cual se realizan solicitudes a un servidor

### **Servidor**

Programa que se ejecuta en un servidor fisico para ofrecer un servicio
al cliente (enviar informacion)

---

## HTTP (HyperText Transfer Protocol)

- *Solicitudes:* Cuando el cliente le pide alguna solicitud al servidor
    - Metodo HTTP
    - Path
    - Version HTTP
    - Headers
    - Body

- *Metodos:* Indica la intencion de la solicitud
    - GET: Solicitar un recurso especifico
    - POST: Crear un recurso especifico
    - PUT: Modificar un recurso especifico
    - DELETE: Eliminar un recurso especifico

- *Respuesta:* Indica la intencion de la solicitud
    - Codigo de estado
    - Texto de estado
    - Version de HTTP
    - Headers
    - Body

- *Codigos de Estado:* Numeros de que indican si se ha completado
exitosamente la solicitud HTTP
    - Respuestas informativas: 100-199
    - Respuestas satisfactorias: 200-299
    - Redirecciones: 300-399
    - Errores de los clientes: 400-499
    - Errores de los servidores: 500-599

- *Puerto:* Ubicacion virtual de sistema operativo en la cual se puede acceder 
a una aplicacion o a un proceso especifico que se este ejecutandos

### **Modulo HTTP**

Permite a NodeJS transmitir informacion con el protocolo HTTP

```javascrip
    // ejemplo para iniciar un servidor http con NodeJS
    const HTTP = require('http');

    const SERVIDOR = HTTP.createServer((req, res) => {
        res.end('Hola Mundo!');
    })

    const PUERTO = 3000;
    SERVIDOR.listen(PUERTO, () => {
        console.log(`Estoy escuchando en el puerto ${PUERTO}...`);
    });
```
---

## URL

- *Estructura de un URL:* Direccion de un recurso en la web
    **https://www.freeCodeCamp.org/espanol/**
    - ***Protocolo (https://)***
    - ***Subdominio (www.):*** Permite a los sitios web organizar y 
    separar la informacion para distintos propositos
    - ***Dominio (freeCodeCamp):*** Es una referencia unica a un 
    sitio web en internet
    - ***Top-level domain (.org)***
    - ***Path (/espanol/):*** Archivo o directorio en el servidor web

- *Parametros de ruta:* Forman parte del URL, e indican el sitio dentro
del dominio web en donde nos encontramos

- *Parametros query (consulta):* Son utilizados para obtener contenido dinamico, se encuentran dentro del URL diferenciados por "?", y representan
informacion en un formato clave-valor 

> https://www.youtube.com/watch **?v=1hpc70_OoAg**
> - Clave = v
> - Valor = 1hpc70_OoAg

Es posible encadenar valor argumentos clave-valor separandonolos con "&"

> ?q=curso+de+node&sourceid=chrome&ie=UTF-8

Normante son utilizados para filtrar solicitudes GET

### Modulo URL 

Herramienta para utilizar la informacion del URL 

``` javascript
    const url = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

    console.log(url.hostname); // www.ejemplo.org
    console.log(url.pathname); // /cursos/programacion
    console.log(url.searchParams); // object URLSearchParams { 'ordenar' => 'vistas', 'nivel' => '1' }
    console.log(url.searchParams.get('ordenar')); // vistas
    console.log(url.searchParams.get('nivel')); // 1
```
---

## Routing