
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