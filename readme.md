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
## Compatibilidad y Requisitos [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/) v5.1.0: Una biblioteca de CSS y JavaScript utilizada para el diseño y la interactividad especificamente para la pagina `contacto.html`.

- [Leaflet API](https://leafletjs.com/download.html)Leaflet 1.9.4: Una biblioteca JavaScript de código abierto para mapas interactivos utilizada espeficamente en la pagina `sucurales.html`. 

- [OpenSteetMap ](https://www.openstreetmap.org/) Proyecto colaborativo para crear mapas editables y libres, utlizada espeficamente en la pagina `sucurales.html`. 

## API 
- [Sheetdb.io API](https://sheetdb.io/) SheetDB es una herramienta que converte una hoja de cálculo de Google en una API JSON. Nos permite conectar con nuestra tabla que contiene los datos utilizados en el sitio web. Utilizada en la pagina `index.html`.

## Compatibilidad y Requisitos
- Navegadores compatibles: Google Chrome (última versión), Mozilla Firefox (última versión), Safari (última versión).

## Informacion Anexa
Con el fin de responder a la solicitud por el cual este proyecto a sido creado, a continuacion de manera ordenada se ira respondiendo cada punto requerido.

- >Poseer al menos 4 páginas html, siendo su temática libre. En caso de ser un Sitio
Web estilo One Page, el mismo deberá tener al menos 4 secciones.

-El sitio dispone de más de 4 páginas: `index.html`, `productos.html`, `sucursales.html`, `productos.html`, `note.html`, `contacto.html`, `tablets.html`, `monitores.html`, `preg_Frec.html`,`impresoras.html`; ademas de 3 páginas más en la carpeta `pages`. 

- >Utilizar etiquetas semánticas para estructurar el sitio.

- Se utilizo etiquetas semanticas con el proposito que la lectura del mismo sea lo mas significativa posible tanto para los desarroladores como los navegadores que procesan y renderizan el sitio.

- >Contener un formulario de contacto con validación realizada mediante Javascript.
Opcional: el formulario podrá enviar un email utilizando algún servicio externo
destinado para ello.

- El formulario solicitado esta en la página `contacto.html` utilizando el archivo `contacto.js` para la validacion de la informacion.

- >Utilizar al menos un Iframe, íconos de FontAwesome o Flaticon; y fuentes locales o
bien de Google Fonts o similar.

- El iframe se utliza en la página `listadoSucursales.html`. Iconos de Fontwesome en la página `header.html` y `footer.html`. Fuentes estan aplicadas desde el estilo en la página `style.css` utilizando google fonts. 

- >Tener al menos una página totalmente responsive con 3 puntos de corte para 3
tamaños de dispositivos distintos.

- ???????

- >Incorporar al menos una animación, transformación o una transición (se deberá
indicar en qué parte del sitio web fue incorporada la animación).

- La animacion esta aplicada en la pagina `header.html` al icono "lupa", "compra" y "login" ![iconos](/assets/media/img/icono.png). Ademas tambien esta aplicada en el `footer.html` en los iconos de redes sociales ![iconos](/assets/media/img/icono2.png)

- >Poseer una estructura HTML maquetada con Flexbox y/o Grid.

- El sitio web esta estructurado con Flexbox

- >Consumir una API Rest desde JavaScript. Deberá informar la API utilizada al
momento de entregar el TPO.

- La API solicitada es utlizada en la pagina `index.html` ![Slider con tira de imagenes](/assets/media/img/api.png).Se utiliza el servicio API desde esta url Sheetdb.io (https://sheetdb.io/) el cual por permisos otorgados utiliza la planilla de calculo alojada en el drive de Google. Los elementos mostrados en el slider estan todos alojados en la planilla de calculo. El estilo aplicado esta en `style.css`; la navegacion esta controlada por el archivo `slider.js`.

- >En caso de querer utilizar Bootstrap (no es obligatorio), sólo podrá hacerlo en la
página del formulario del sitio web. No se aceptarán proyectos desarrollados
íntegramente en algún Framework de CSS (Bootstrap, Materialize, Tailwind, etc.) o
similar.

- El recurso Boostrap es utilizado unicamente en la pagina `contacto.html`. 

- >El desarrollo web deberá subirse a un servidor on-line para poder ser navegada por
el Instructor. Ejemplo: GitHub Pages, Netlify o similares.

- Este sitio esta alojado y publicado en aqui (https://)

- >Además de los aspectos técnicos mencionados anteriormente, el proyecto deberá
contemplar aspectos de diseño los cuales también serán evaluados por el
Instructor. Para eso se recomienda que vean el material disponible en el Aula
Virtual. Seminario de Diseño Web: https://youtu.be/fVkGt2tYIj0. Para más
información, ver material incluído en el Aula Virtual “Diseño” que aparecerá luego
de la Unidad de Bootstrap. En relación al estilo de la web (look&feel) se evaluará y
considerará: maquetación del sitio web; alineación, orden y márgenes entre los
elementos; tipografía seleccionada acorde a la temática del proyecto; fotografía de
calidad y optimizada para web; paleta de colores seleccionada acorde a la temática;
logo utilizado en el sitio web; íconos utilizados y favicon.

- Se trato de utilizar colores y tipografias acorde al proyecto asi como tambien la creacion desde cero del Logo, imagenes de publicidad utilizadas en el slider automatico.
![Paleta de colores ](/assets/media/img/paletadecolores.png)

![Slider de publicidad](/assets/media/img/publicidad.png)

- El favicon esta presente en cada cabecera de las paginas web de este proyecto, facilmente identificable. 

![Favicon](/assets/media/img/favicon.png)

## Nota Aclaratoria acerca del contenido en el sitio 

- Los elementos a continuacion no poseen funcionalidad pero estan a modo de completar la visual del proyecto, todos ubicados en el `header.html`:
    - Iconos de Usuario y carrito de compras.
    - Barra de busqueda.
    - Link a enlace a promociones.


## Integrantes del proyecto

- Erica Mendez (https://github.com/erimendez)
- Por favor completen aca!!!!
