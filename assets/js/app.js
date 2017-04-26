
window.addEventListener("load" , function(e){
/*MODAL GALLERY*/
var modal=document.getElementById("modal");/*Modal fondo*/
var close=document.getElementById("close");/*Button Close*/
var img = document.getElementById("gallery");/*Imagen alimentador*/
var contentImage=document.getElementById("viewImage");/*Contenedo de la imagen modal*/
var classImage = document.getElementsByClassName("div-image");/*clase imagenes*/
img.addEventListener("click",function(event){
    if (event.target.tagName == "IMG"){
      modal.style.display = "block";
      contentImage.src = event.target.src;
    }
});

close.addEventListener("click",function(){
  modal.style.display = "none";
});

//GalleryOptions
var select=document.getElementById("selection");
select.addEventListener("mouseover", function(){
  if (event.target.tagName == "IMG"){
      contentImage.src = event.target.src;
    }
});
// Validacion de formulario
enviar.onclick = function() {
    var nombre = document.getElementById("name");
    var apellido = document.getElementById("lastname");
    var correo = document.getElementById("input-email");
    var phone = document.getElementById("telefono");
    var msje = document.getElementById("msj");
    //Ingresar los campos necesarios
    if (nombre.value == "" || apellido.value == "" || correo.value == "" || phone.value == ""){
      msje.innerText = "*Verifica que datos obligatorios estan incompletos";
    }
    //caracteres expresion regular
    var crtCantidad = /^\s+|\s+$/;
    var letras = /[a-zA-Z]/;
    var crtNumero = /[0-9]/;
    validaNombre();
    //valido el nombre
    function validaNombre(){
      var msg = document.getElementById("msja");
      if (nombre.value.length < 3 || crtCantidad.test(nombre.value)){
        msg.innerText = "Tiene que ingresar su nombre";
        return nombre.focus();
      } else if (crtNumero.test(nombre.value) || !(letras.test(nombre.value))){
        msg.innerText = "Solo se permiten letras";
        return nombre.focus();
      } else if (!(/[^a-z]+([a-z]{1,})/.test(nombre.value))){
        msg.innerText = "Su nombre debe empezar con mayúscula";
        return nombre.focus();
      } else{
        msg.innerText = "";
        msg.style.display = "none";
        validaApellido();
      }
    }
    //valido el apellido
    function validaApellido(){
      var msg = document.getElementById("msjb");
      if (apellido.value.length < 3 || crtCantidad.test(apellido.value)){
        msg.innerText = "Tiene que ingresar su apellido";
        return apellido.focus();
      } else if (crtNumero.test(apellido.value) || !(letras.test(apellido.value))){
        msg.innerText = "Solo se permite letras";
        return apellido.focus();
      } else if (!(/[^a-z]+([a-z]{1,})/.test(apellido.value))){
        msg.innerText = "Su apellido debe empezar con mayúscula";
        return apellido.focus();
      } else{
        msg.innerText = ""
        msg.style.display = "none";
        validaEmail();
      }
    }
    //valido el correo
    function validaEmail(){
      var msg = document.getElementById("msjc")
      var crt = /\S+@\+\S+.\+S+/;
      var crt2= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
      if (!crt.test(correo.value) && correo.value.length < 10){
        msg.innerText = "Ingrese el formato correcto del correo";
        return correo.focus();
      } else if (!(crt2.test(correo.value))){
        msg.innerText = "Correo no válido \n ej: abcd@lab.co";
        return correo.focus();
      } else{
        msg.innerText = ""
        msg.style.display = "none";
        validaPhone();
      }
    }
    //valido la telefono
    function validaPhone(){
      var msg = document.getElementById("msjd");
      var expresion = /^9[\d]{8}$/;
      if (isNaN(phone.value) || !expresion.test(phone.value)){
        msg.innerText = "Debe ingresar un número con el formato correcto \n ej: 987654321";
        return phone.focus();
      } else{
        msg.innerText = "";
        msg.style.display = "none";
        msje.style.color = "rgb(241, 27, 97)";
        msje.innerText = "Gracias por su visita :)";
      }
    }
  }

//Gallery Image Dinamico
  function loadGallery (){
    var productos=[{nombre:"Cremallera básica moda otoño 2017 Simplee",precio:"S/ 40.00",st:"&#9733; &#9733; &#9733; &#9733;"},
                   {nombre:"Cremallera básica moda Invierno Simplee",precio:"S/ 80.00",st:"&#9733; &#9733; &#9733;"},
                   {nombre:"Chaqueta con  stampado YLO - All",precio:"S/ 45.00",st:"&#9733; &#9733; &#9733; &#9733; &#9733;"},
                   {nombre:"Cremallera básica moda otoño 2017 Simplee",precio:"S/ 40.00",st:"&#9733; &#9733; &#9733;"},
                   {nombre:"Cremallera básica moda otoño 2017 Simplee",precio:"S/ 40.00",st:"&#9733; &#9733; &#9733;"},
                   {nombre:"Cremallera básica moda otoño 2017 Simplee",precio:"S/ 40.00",st:"&#9733; &#9733; &#9733; &#9733;"},
                   {nombre:"Cremallera básica moda otoño 2017 Simplee",precio:"S/ 40.00",st:"&#9733; &#9733; &#9733; &#9733;"},
                   {nombre:"Cremallera básica moda otoño 2017 Simplee",precio:"S/ 40.00",st:"&#9733; &#9733; &#9733;"}];
    for (var i = 0; i < 9; i++) {
      var boxProductos = document.getElementById("boxproducto");
      var cntImage = document.createElement("div");
      var pImage = document.createElement("div");
      var img = document.createElement("img");
      var dscr = document.createElement("div");
      var info = document.createElement("div");
      var costo = document.createElement("span");
      var stRating = document.createElement("span");
      var star = document.createElement("span");  
      stRating.setAttribute("class","star-rating");
      costo.setAttribute("class","costo");
      dscr.setAttribute("class","descr-product");
      info.setAttribute("class","inf-product");
      pImage.setAttribute("class","p-image");
      cntImage.setAttribute("class","contentImage");
      img.setAttribute("src","assets/catalogo/chaqueta"+i+".jpg");
      star.innerHTML=productos[i].st;
      info.innerHTML=productos[i].nombre;
      costo.innerHTML=productos[i].precio;
      pImage.appendChild(img);
      dscr.appendChild(info);
      dscr.appendChild(costo);  
      stRating.appendChild(star);
      dscr.appendChild(stRating);
      cntImage.appendChild(pImage);
      cntImage.appendChild(dscr); 
      boxProductos.appendChild(cntImage); 
    }
  }
  loadGallery();

});

function init(){
        var mapOption = {
         center: new google.maps.LatLng(-12.1189618,-77.040862),
         zoom: 5,
         mapTypeId:google.maps.MapTypeId.ROADMAP
        };
    var map = new google.maps.Map(document.getElementById("map"),mapOption);
 }
google.maps.event.addDomListener(window, 'load', init);

window.load = function(){}
  var slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
    showDivs(slideIndex += n);
  }

  function currentDiv(n) {
    showDivs(slideIndex = n);
  }

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" slideShow", "");
    }
    x[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " slideShow";
}

