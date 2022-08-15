# NOTAS DE NodeJS

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

> ``` bash
>     npm install express //Instalar
>     npm uninstall express //Desinstalar
>     npm install express@4.15.2 //Instalar version específica
> ```

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