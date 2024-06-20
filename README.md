# Technical-Test-for-InBest
Technical Test for InBest

DOCUMENTACIÓN PRUEBA TÉCNICA INBEST
Instrucciones para correr el programa:
1. Descargar todos los archivos desde: https://github.com/Jhonn250/Technical-Test-for-
InBest
Levantar Servidor
1. Arrastrar carpeta backend a VSCode.
2. Abrir nueva terminal y situarse a la carpeta de backend.
3. En la terminal escribir el comando npm install para la instalación de módulos.
4. Para levantar el servidor escribir en la misma terminal npm start, si todo sale bien
debería estar escuchando en el puerto 4000.
Levantar Frontend
1. Para el frontend arrastrar la carpeta my_app a otra ventana de VSCode.
2. Abrir nueva terminal y situarse a la carpeta de my_app.
3. En la terminal escribir el comando npm install para la instalación de módulos.
4. Situarse en la carpeta src escribiendo en la terminal cd src/ .
5. Para correrlo escribir en la terminal npm run dev.
Importar colección a Postman
1. Abrir Postman
2. Seleccionar Import y arrastrar el archivo inBest API.postman_collection.json
3. Ya se debería tener los endpoints
Opciones Postman
Tenemos 4 opciones para carga de imágenes:
• Upload Image (Normal): Carga una imagen sin modificar.
• Upload Image (Black and White): Carga una imagen y la convierte a blanco y
negro.
• Upload Image (Invert): Carga una imagen e invierte sus colores
• Upload Image (Rezise): Carga una imagen y modifica su tamaño
Tenemos dos opciones para regresar las fotos almacenadas:
• Get List of All files: Regresa un json de los nombres de las imágenes almacenadas.
• Get All Images: Regresa un archivo .zip de las imágenes almacenadas.
  
Como subir una imagen desde Postman
Nota: El sistema solo guarda las imágenes que tengan nombre distinto a las que ya se encuentran en la carperta de uploads, si se quiere guardar la misma imagen primero se debe de renombrar y se debe de usar archivos con extensión .jpg para un funcionamiento óptimo.
Upload Image (Resize)
Desde postman nos vamos al apartado de body y tendremos una variable llamada image en la cual podemos seleccionar una imagen desde nuestro ordenador, (en caso de tener una seleccionada debemos presionar la X que esta a lado del nombre de la imagen en Postman) y una vez seleccionada podemos seleccionar los parametros de width y height directamente desde la dirección http, en la primera parte tenemos width (200 por defecto) y en la segunda tenemos height (200 por defecto), podemos cambiarlo solo ingresando nuevos valores, de ahí debemos presionar el botón en azul Send, una vez realizado veremos en nuestro proyecto backend en la carpeta uploads la misma imagen pero con las medidas que pusimos.
Upload Image (Normal), Upload Image (Black and White) y Upload Image (Invert)
Desde postman nos vamos al apartado de body y tendremos una variable llamada image en la cual podemos seleccionar una imagen desde nuestro ordenador, (en caso de tener una seleccionada debemos presionar la X que esta a lado del nombre de la imagen en Postman) y una vez seleccionada debemos presionar el botón en azul Send, una vez realizado veremos en nuestro proyecto backend en la carpeta uploads la misma imagen pero ahora cambia dependiendo de la opción deseada.
Como descargar las imágenes desde nuestro navegador
Get All Images
Desde nuestro navegador ingresamos la dirección: http://localhost:4000/images/ la cual nos va a descargar un .zip con todas las imágenes que guardamos.
Como saber cuantas imágenes tenemos y los nombres de los archivos guardados
Get List of Files
Desde Postman solo presionamos el botón azul Send y nos regresará un arreglo con los nombres de los archivos que hemos subido.
 
Como subir una imagen desde Frontend
• Nos dirigimos a http://localhost:3000 y tendremos nuestra aplicación.
• En la opcion de Seleccionar Archivo vamos a abrir una imagen desde nuesto
ordenador, y se va a mostrar un preview de la imagen.
• En Select an Option tendremos las mismas opciones que teniamos en Postman,
seleccionamos la deseada.
• Presionamos el botón Upload Photo y se va a mandar al backend y si sale bien se
creará un nuevo archivo en la carpeta de uploads.
Nota: Para manipular el tamaño en la opcion de Change Size se debe cambiar desde el archivo imagesAPI.js debido a falta de tiempo.
