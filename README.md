# unq-ui-axel-ivan-garcia-trabajo-final

<h1 align="center"> Preguntados </h1>

El proyecto es una implementación sobre el juego de Preguntados. Donde el juego te da una pregunta con varias opciones, y tenes que elegir la opción correcta.

## ¿Como levantar el proyecto?

1. **Lo primero que hay que hacer es clonar el repositorio**
    - Lo primero es instalar GIT, si no lo tienes instalado. [Instalar GIT](https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Instalaci%C3%B3n-de-Git)
    - Una vez instalado, abrir la terminal y poner git clone "repositorio". En "repositorio" poner el URL del proyecto.

2. **Descargar Node**
   - Para saber está instalado Node, abrir terminal y escribir "node --version" ó "node -v", si aparece la versión, está instalado.
   - Si no tiene instalado Node.js [Descargar Node](https://nodejs.org/es/download)

3. **Ir a la ruta del repositorio**
    - Abrir una terminal y utilizar el comando cd <ruta-repositorio> para ir al directorio donde se clonó el repositorio.
    - Suponiendo que el directorio esté en `c:/documents`, se debería ir a: 
      ```
      cd c:/documents/unq-ui-axel-ivan-garcia-trabajo-final/Web
      ``` 
4. **Instalar las dependencias**
    - Una vez dentro del directorio (del punto 3), se debe instalar las dependencias con el siguiente comando:
    ```
    npm install
    ```
    O de esta otra manera:
    ```
    npm i
    ```
5. **Levantar el servidor**
   - Una vez que se haya instalado las dependencias, para levantar el servidor para jugar al Preguntados se ejecuta el siguiente comando:
   ```
   npm run dev
   ```
6. **Abrir la página**
   - Luego de ejecutar el comando del `punto 5` ir a la siguiente página listo para jugar: [http://localhost:5173/](http://localhost:5173/)
   - Si el port no es `5173` en la cónsola donde se ejecutó el comando anterior, indica el port.