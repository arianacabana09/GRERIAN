
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


 function init(){
        var mapOption = {
         center: new google.maps.LatLng(-12.1189618,-77.040862),
         zoom: 5,
         mapTypeId:google.maps.MapTypeId.ROADMAP
        };
    var map = new google.maps.Map(document.getElementById("map"),mapOption);

 }
google.maps.event.addDomListener(window, 'load', init);

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
    //alert("Estos Datos son obligatorios \n Nombre \n apellido \n correo \n password");
  }

  //caracteres expresion regular
  var crtCantidad = /^\s+|\s+$/;
  var letras = /^[a-zA-Z]+$/;
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
