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

## Modulos build-in (incorporados)

Modulos que pueden ser usados sin la necesidad de ser instalados
- Ejemplo: http/s, file system, operative system, path

## Modulo console

Es un modulo build-in que implementa funcionalidades similares a la consola de
un navegador web 

## Modulo process

Modulo que permite mostrar informacion del procesos que se esta ejecutando

## Modulo OS

Permite obtener informacion sobre el sistema operativo en el cual se ejecuta
la aplicacion

## Modulo Timer

Contiene funciones que ejecutan codigo luego de cierto periodo de tiempo
- Funciones utiles:  setTimeout, setImmediate, setInterval

## Modulo fs

Contiene funcionalidades que permiten utilizar el sistema de archivos
- Ejemplo: Leer, Copiar, Mover, Eliminar, Modificar
> Por defecto son metodos asincronos, pero pueden ser utilizados como medotos sincronos agregandoles la palabra Sync al final 
> ``` javascript
>     fs.rename();
>     fs.renameSync();
> ```