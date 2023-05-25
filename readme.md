# Documentacion del Sitio Web "Tecno Flow" #

## Descripcion
Tecno Flow es un sitio dedicado a la venta de productos tecnologicos tanto para uso hogareño como de oficina.
Cuenta con varias paginas con diversos productos (celulares, notebooks, tablets, monitores e impresoras) y sus descripciones, ademas de un formulario de consulta.

## Estructura del proyecto
- *index.html*: Página de inicio del sitio web.
- *preg_Frec.html*:Página de las preguntas frecuentes.
- *contacto.html*:Página de contacto con el cliente.
- *gracias.html*:Página de agradecimiento por la compra.
- *impresoras.html*:Página del producto impresora.
- *monitores.html*:Página del producto monitor.
- *note.html*:Página del producto notebook.
- *productos.html*:Página del producto celular.
- *sucursales.html*:Página de las sucursales del fisicas.
- *tablets.html*:Página del producto tablet.

- *css/*:Carpeta que contiene los estilos del sitio web.

- *js/*:Carpeta que contiene los archivos javascript/jason del sitio web.

- *pages/*:Carpeta que contiene paginas html anexas del sitio web.

- *media*:Carpeta que contiene archivos visuales para el sitio web.


## Archivo `index.html`
Este archivo contiene la pagina de inicio del sitio web, donde los usuario(clientes) pueden comprar y visualizar los productos tecnologicos a la venta. Ademas de promociones y ofertas.

## Archivo `preg_Frec.html`
Este archivo contiene las repuestas a las preguntas frecuentes hechas por los clientes en el momento de la compra o postventa; ademas de las gtias de los productos.

## Archivo `contacto.html`
Este archivo contiene el formulario de contacto que el usuario(cliente)puede completar para elevar un comentario/sugerencia o reclamo.

## Archivo `gracias.html`
Este archivo contiene un texto de agradecimiento por la compra.

## Archivo `impresoras.html`
Este archivo contiene infomacion sobre las impresoras en venta, ademas de sus descripciones y sus valores comerciales correspondientes.

## Archivo `monitores.html`
Este archivo contiene infomacion sobre los monitores en venta, ademas de sus descripciones y sus valores comerciales correspondientes.

## Archivo `note.html`
Este archivo contiene infomacion sobre las notebooks en venta, ademas de sus descripciones y sus valores comerciales correspondiente.

## Archivo `productos.html`
Este archivo contiene infomacion sobre los celulares en venta, ademas de sus descripciones y sus valores comerciales correspondiente.

## Archivo `sucursales.html`
Este archivo contiene informacion y ubicacion fisica de las sucursales de la empresa en cuestion.

## Archivo `tablets.html`
Este archivo contiene infomacion sobre las tablets en venta, ademas de sus descripciones y sus valores comerciales correspondiente.

## Carpeta Css
- *style.css*: Contiene los estilos generales del sitio web.
- *pf.css*: Contiene los estilos específicos para la página `preg_Frec.html`.
- *style_contacto.css*: Contiene los estilos específicos para la página `contacto.html`.
- *productos.css*: Contiene los estilos específicos para la páginas `impresoras.html`, `monitores.html`,`note.html`, `productos.html`, `tablets.html`.
- *sucursales.css*: Contiene los estilos específicos para la página `sucursales.html`.

## Carpeta Js
- *all.min.js*: Es el archivo que contiene  el codigo javascript para visualizar los iconos la pagina especifica `sucursales.html`.
- *contacto.js*: Es el archivo que contiene  el codigo javascript para validar el ingreso de datos de la pagina especifica `contacto.html`.
- *nav_footer.js*:  Es el archivo que contiene  el codigo  javascript para visualizar el `<header>` y `<footer>` en todas las paginas del sitio web.
- *script.js*:  Es el archivo que contiene  el codigo  javascript para visualizar e insertar en el DOM del "slider" del `index.html` los campos de la base de datos.
- *seccion.js*:  Es el archivo que contiene  el codigo  javascript para visualizar un unico producto, ocultando el resto de la informacion no solicitada. 
- *seccioncelus.js*:  Es el archivo que contiene  el codigo  javascript para visualizar un tipo de producto,y ocultando el resto de la informacion. Se puede ejecutar el mismo script sin volver a actualizar la pagina web  para poder seleccionar la informacion anteriormente oculta. 
- *slider.js*:  Es el archivo que contiene  el codigo  javascript para controlar los botones de navegacion del "slider" de la pagina `index.html`.
- *sucursales.js*:  Es el archivo que contiene  el codigo  javascript para visualizar e insertar en el DOM de la pagina `sucursales.html` las sucursales y localidades. Asi como tambien lo datos de la geolocalizacion de las mismas.

## Carpeta media/img
Carpeta que contiene las imagenes en formato png/jpg del sitio web.

## Carpeta media
- *listado_de_sucursales.pdf*: Es el archivo que contiene la informacion en formato PDF de las sucursales fisicas del sitio web. 

## Carpeta pages
- *header.html*: Archivo que contiene el codigo html del `<header>` del sito web. 
- *footer.html*: Archivo que contiene el codigo html del `<footer>` del sito web. 
- *listadoSucursales.html*: Archivo que contiene el codigo html y estilo para la presentacion del archivo PDF.

## Dependencias y Bibliotecas
- [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/) v5.1.0: Una biblioteca de CSS y JavaScript utilizada para el diseño y la interactividad especificamente para la pagina `contacto.html`.

- [Leaflet API](https://leafletjs.com/download.html)Leaflet 1.9.4: Una biblioteca JavaScript de código abierto para mapas interactivos utilizada espeficamente en la pagina `sucurales.html`. 

- [OpenSteetMap ](https://www.openstreetmap.org/) Proyecto colaborativo para crear mapas editables y libres, utlizada espeficamente en la pagina `sucurales.html`. 

## API 
- [Sheetdb.io API](https://sheetdb.io/) SheetDB es una herramienta que converte una hoja de cálculo de Google en una API JSON. Nos permite conectar con nuestra tabla que contiene los datos utilizados en el sitio web. Utilizada en la pagina `index.html`.

## Compatibilidad y Requisitos
- Navegadores compatibles: Google Chrome (última versión), Mozilla Firefox (última versión), Safari (última versión).

