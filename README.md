# Cyan
Librería JavaScript para escribir el frontend de aplicaciones web en ventanas, sin HTML ni CSS.

## Uso

Descarga el archivo *cyan.js* e incorpóralo a tu proyecto en la sección **`<head>`** del *index.html*, y escribe toda tu aplicación web con Cyan y JavaScript entre las etiquetas **`<script></script>`**, o en archivos *.js* como componentes a importar dentro de ellas.

Se recomienda que cada documento o componente se escriba en un archivo aparte, para lograr una estructura clara que ayude a la actualización del software, y permita su reutilización en otros proyectos. Los documentos son similares a las ventanas tradicionales: se pueden mover, organizar, cerrar u ocultar. También se pueden crear componentes sin asociarse a un documento, como por ejemplo, una barra de menús.

**cyan.Begin()**

Esta sentencia inicializa el escritorio de la aplicación web, mostrando por defecto la mesa 0 (mesa inicial de infinitas) y una barra de herramientas para gestionar los documentos.
A partir de esta instrucción, se van escribiendo sentencias como *AddDocument* para crear un nuevo documento, *AddButton*, *AddLabel*, etc, para crear objetos de la interfaz de usuario dentro del documento, y se añade código en sus eventos que Cyan crea automáticamente como funciones nombradas con el mismo nombre de los objetos seguido del nombre del evento. Si escribes esta sentencia con el parámetro cyan.Begin(cyan.Const.DarkMode), la interfaz de usuario cambiará a modo oscuro.

### Características:

- Multitarea: las funcionalidades de las aplicaciones pueden programarse en documentos que el usuario puede abrir conjuntamente, permitiéndole trabajar en distintas tareas al mismo tiempo. Si se tiene un monitor de alta resolución ultra wide, se podría aprovechar mejor esta capacidad.
  
- Rapidez: los documentos se muestran al usuario instantáneamente, pues ya se descargaron en segundo plano. Esta descarga se realiza en segundo plano pero secuencialmente, brindando un control preciso sobre los componentes.

- Cada documento puede escribirse en un archivo con la interfaz de usuario, datos y métodos, como un componente completo para mejorar la organización y reutilización.

- No se requiere crear funciones de eventos. Estos están listos para ser programados en funciones como: function NombreObjeto_OnNombreEvento() { tu código... }

- Pueden escribirse componentes que no se referencian entre sí ni a sus objetos, para lograr componentes completamente reutilizables. Esto se puede conseguir porque cada objeto dispone de un método *Talk* a través del cual emitir mensajes, y un método *Listen* que escucha a los demás. Así, los componentes pueden comunicarse y reaccionar mediante mensajes que se envían a todos, sin importar sus nombres.

- Se incluye validación de datos automática, como enteros, reales, rangos, alfanuméricos, etc.

- El usuario dispone de un escritorio virtual mayor al tamaño del navegador con infinitas mesas de trabajo para organizar sus documentos como desee.

### ¡Hola mundo!

El siguiente código crea un documento con el clásico saludo *¡Hola mundo!* Aunque pudo haberse escrito el código en el mismo archivo *index.html*, se prefirió escribir el documento en el archivo *DocHolaMundo.js* para ilustrar el uso de componentes, que se cargan con la sentencia **cyan.LoadComponent()** en el *index.html*. Notará el uso de algunas constantes de posición de Cyan, como por ejemplo, cyan.Col5, y de otras de tamaño, como por ejemplo, cyan.B4W. Estas y otras constantes las ofrece Cyan para facilitar el desarrollo y no tener que estar especificando números.

La función *ComponentDocHolaMundo_OnLoaded()* se ejecuta cuando el componente completa su carga, por eso se escribió dentro de ella que en ese momento se muestre el documento en pantalla (con la sentencia *Bring()*). También podría mostrarse en pantalla un documento al pulsar un botón, seleccionar una opción de un menú, etc.

![holamundo](https://github.com/pensadornatural/cyan/blob/84b98dff59bc47c699f3e552628f43de52693163/holamundo.png)

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
cyan.AddDocument(cyan.Col5, cyan.Row3, cyan.B4W, cyan.B4H, 'Hola', 'DocHolaMundo')
DocHolaMundo.AddLabel(cyan.Col2, cyan.Row2, '¡Hola mundo!')

function ComponentDocHolaMundo_OnLoaded() {
    DocHolaMundo.Bring()
}
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

cyan.AddApi(id: string)

cyan.AddChronometer(id: string)

cyan.AddTimer(hours: number, minutes: number, seconds: number, centiseconds: number, id: string)

cyan.AddDiv(x: number, y: number, z: number, width: number, height: number, borderWidth: number, borderColor: string, fillColor: string, id: string)

cyan.AddMenuBar(x: number, y: number, z: number, id: string)

cyan.AddPulldownMenu(id: string)

**Notas**

- El parámetro *z* corresponde al número de mesa donde se creará el objeto, en las coordenadas *x* e *y*. Recordar que por defecto, la mesa mostrada al inicio es la 0.
- Cuando se añade un objeto a un documento, no se debe especificar el parámetro *z*, porque su valor siempre será el mismo que tenga el documento, y en lugar de comenzar la sentencia con "cyan.", debe usar simplemente el nombre del documento. Por ejemplo: DocHolaMundo.AddLabel(cyan.Col2, cyan.Row2, '¡Hola mundo!')

---

## PARTICIPACIÓN

Este proyecto es open source, y queda disponible a la comunidad tanto para su uso como para participar activamente, sea proponiendo y programando nuevas características, escribiendo el manual, realizando pruebas, difundiendo o aportando ideas. Todos son bienvenidos.

**Para colaborar desarrollando:**

El proyecto contiene solo dos archivos: el archivo *cyan.ts* con el código fuente en TypeScript y es el que debes tomar para trabajar, y el archivo *cyan.js*, que es el código transpilado a JavaScript y minificado listo para su uso en los proyectos. Puedes tomar uno de los issues o proponer uno nuevo, y luego crea una rama para desarrollarlo editando el archivo. Cuando termines, realiza un Pull Request.

Toda ayuda es útil. Muchísimas gracias.

# Licencia

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2025, Gabriel Lucero
