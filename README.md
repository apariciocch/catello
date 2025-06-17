# Catello

Esta página contiene un formulario interactivo. Al abrir `index.html` en un navegador se mostrarán campos para capturar datos personales y 84 preguntas con opciones de respuesta. Las preguntas se generan dinámicamente mediante `main.js`.

El botón **Generar informe** descarga un archivo DOCX con los resultados. Además se incluye el botón **Guardar en Drive**, que utiliza la API de Google Drive para subir ese mismo documento. En `main.js` ya se ha configurado el identificador de cliente OAuth
```
422931240525-c87t5qa8ba47s6c0klmrkii444knclub.apps.googleusercontent.com
```
para que puedas probar la integración o reemplazarlo por el tuyo propio.
