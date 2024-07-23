# Cyan
Librería JavaScript para desarrollar el frontend de aplicaciones web, sin escribir HTML ni CSS, con UI de escritorio.

## Uso

Descarga el archivo *cyan.js* e incorpóralo a tu proyecto en la sección **`<head>`** del *index.html*, y escribe el software con Cyan y JavaScript entre las etiquetas **`<script></script>`** o en archivos *.js* como componentes a importar en esa misma sección.

Se recomienda que cada documento (similar a las ventanas) o componente se escriba en un archivo aparte, para lograr una estructura clara que ayude a la actualización del software, y permita su reutilización en otros proyectos.

**cyan.Begin()**

Esta sentencia inicializa el escritorio de la aplicación web, mostrando por defecto la mesa 0 y una barra de herramientas para gestionar los documentos.
A partir de esta instrucción, se van escribiendo sentencias como *AddDocument* para crear un nuevo documento, *AddButton*, *AddLabel*, etc, para crear objetos de la interfaz de usuario dentro del documento, y se añade código en sus eventos que Cyan crea automáticamente como funciones nombradas con el mismo nombre de los objetos seguido del nombre del evento.

### Características:

- Los documentos se muestran al usuario instantáneamente, sin que deba esperar su descarga desde el servidor, como sucede con las aplicaciones web usuales, pues ya se descargaron en segundo plano. Esta descarga se realiza en segundo plano pero secuencialmente, brindando un control preciso sobre los componentes.

- Cada documento puede escribirse en un archivo con la interfaz de usuario, datos y métodos, como un componente completo.

- No se requiere crear funciones de eventos. Estos están listos para ser programados en funciones como: function NombreObjeto_OnNombreEvento() {código...}

- Pueden escribirse componentes que no se referencian entre sí ni a sus objetos, para lograr componentes completamente reutilizables. Esto se puede conseguir porque cada objeto dispone de un método *Talk* a través del cual emitir mensajes, y un método *Listen* que escucha a todos los demás, de modo de poder programar las reacciones que correspondan en los objetos que deban reaccionar a uno o más mensajes en particular.

- Se incluye validación de datos automática, como enteros, reales, rangos, alfanuméricos, etc.

- El usuario dispone de un escritorio mayor al tamaño del navegador con infinitas mesas de trabajo para organizar sus documentos como desee.

### Aplicación vacía con el escritorio de Cyan

```
<!DOCTYPE html>
<head>
    <script type="text/javascript" src="./cyan.js"></script>
</head>
<body>
    <script>
        cyan.Begin()
    </script>
</body>
</html>
```

### ¡Hola mundo!

El siguiente código crea un documento con el clásico saludo *¡Hola mundo!* Aunque pudo haberse escrito el código en el mismo archivo *index.html*, se prefirió escribir el documento en un archivo aparte (*DocHolaMundo.js*) para ejemplificar el uso de componentes, que se cargan con la sentencia **cyan.LoadComponent()** en el *index.html*.

Archivo: index.html
```
<!DOCTYPE html>
<head>
    <script type="text/javascript" src="./cyan.js"></script>
</head>
<body>
    <script>
        cyan.Begin()
        cyan.LoadComponent("DocHolaMundo.js")
    </script>
</body>
</html>
```

Archivo: DocHolaMundo.js
```
// Interfaz de usuario.
cyan.AddDocument(100,100,360,200,"","DocHolaMundo")
DocHolaMundo.AddLabel(130,60,"¡Hola mundo!","DocHolaMundo_lblSaludo")
DocHolaMundo.Bring()
```

---

**Manual de usuario**

El manual de usuario con el detalle de todos los comandos para crear objetos, así como los métodos de cada uno, la lista de constantes y otros objetos que ofrece Cyan y cómo modificar la interfaz de usuario, comenzará prontamente a ser escrito.
Por ahora, se indica en la siguiente sección los comandos para crear objetos.

## Sentencias para crear objetos

cyan.AddDocument(x: number, y: number, width: number, height: number, caption: string, id: string)

cyan.AddCanvas(x: number, y: number, z: number, width: number, height: number, id: string)

cyan.AddBox(x: number, y: number, z: number, width: number, height: number, borderWidth: number, borderColor: string, fillColor: string, id: string)

cyan.AddEllipse(x: number, y: number, z: number, width: number, height: number, borderWidth: number, borderColor: string, fillColor: string, id: string)

cyan.AddLabel(x: number, y: number, z: number, caption: string, id: string)

cyan.AddTextBox(x: number, y: number, z: number, caption: string, id: string)

cyan.AddButton(x: number, y: number, z: number, caption: string, id: string)

cyan.AddImage(x: number, y: number, z: number, width: number, height: number, imageFile: string, caption: string, id: string)

cyan.AddVideo(x: number, y: number, z: number, width: number, height: number, videoFile: string, autoPlay: boolean = false, id: string)

cyan.AddCheckBox(x: number, y: number, z: number, caption: string, id: string)

cyan.AddRadioButtonGroup(x: number, y: number, z: number, id: string)

cyan.AddComboBox(x: number, y: number, z: number, id: string)

cyan.AddFile(x: number, y: number, z: number, id: string)

cyan.AddRequester(id: string)

cyan.AddChronometer(id: string)

cyan.AddTimer(hours: number, minutes: number, seconds: number, centiseconds: number, id: string)

cyan.AddDiv(x: number, y: number, z: number, width: number, height: number, borderWidth: number, borderColor: string, fillColor: string, id: string)

cyan.AddMenuBar(x: number, y: number, z: number, id: string)

cyan.AddPulldownMenu(id: string)

**Notas**

- Los métodos disponibles de cada objeto serán documentados prontamente, así como las constantes y otros elementos que ofrece Cyan.
- El parámetro *z* corresponde al número de mesa donde se creará el objeto, en las coordenadas *x* e *y*. Recordar que por defecto, la mesa mostrada al inicio es la 0.
- Cuando se añade un objeto a un documento, no se debe especificar el parámetro *z*, porque su valor siempre será el mismo que tenga el documento.

---

## PARTICIPACIÓN

Este proyecto es open source, y queda disponible a la comunidad tanto para su uso como para participar activamente, sea proponiendo y programando nuevas características, escribiendo el manual, realizando pruebas, difundiendo o aportando ideas. Todos son bienvenidos.

**Para colaborar desarrollando:**

El proyecto contiene solo dos archivos: el archivo *cyanjs.ts* con el código fuente en TypeScript y es el que debes tomar para trabajar, y el archivo *cyan.js*, que es el código transpilado a JavaScript y minificado listo para su uso en los proyectos. Puedes tomar uno de los issues o proponer uno nuevo, y luego crea una rama para desarrollarlo editando el archivo. Cuando termines, realiza un Pull Request.

Toda ayuda es bienvenida. Muchísimas gracias.

# Licencia

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2024, Gabriel Lucero
