let header = `
<div class="logo">
<img src="./assets/media/img/tecnoflow.jpg" alt="aca va el logo">
</div>
<div class="texto">
<h1>Tecnologia que no para</h1>
</div>
<div class="contenedorbuscador">
<div class="buscador">
<input type="text" id="buscarproducto" placeholder="Que tecnologia necesitas hoy?">
</div>
<div class="lupa">
<i class="fa-sharp fa-solid fa-magnifying-glass fa-beat"></i>
</div>
</div>
<div >
<h1> iconos lindos</h1>
</div>
<!--  Barra de NAVEGACION -->
<div class="container_menu">
  <div class="menu">
    <input type="checkbox" id="check__menu">
    <label id="#label__check" for="check__menu">
      <i class="fas fa-bars icon__menu"></i>
    </label>
<nav>
<ul>
<!-- <li><a href="#">Nosotros</a></li> -->
<li>
  <a href="index.html">Producto</a>
  <ul>
    <li><a href="#">Submenu1</a></li>
    <li><a href="#">Submenu1</a></li>
    <li><a href="#">Submenu1</a></li>
    <li><a href="#">Submenu1</a></li>
  </ul>
</li>
<li><a href="preg_Frec.html">FAQs</a></li>
<li><a href="sucursales.html">Sucursales</a></li>
<li><a href="contacto.html">Contacto</a></li>
</ul>
</nav>
</div>
</div>
`
document.getElementById("idheader").innerHTML = header
