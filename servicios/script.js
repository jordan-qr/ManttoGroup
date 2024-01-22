document.addEventListener('DOMContentLoaded', function() {
    var contenedor = document.getElementById('miContenedor');
  
    // Elimina la clase 'mostrar' si ya existe
    contenedor.classList.remove('mostrar');
  
    // Forzar el reflujo (reflow) para reiniciar la animación
    void contenedor.offsetWidth;
  
    // Agrega la clase 'mostrar' para iniciar la animación
    contenedor.classList.add('mostrar');
  });


  // Función para mostrar u ocultar el ícono de WhatsApp basado en el desplazamiento
  window.onscroll = function() {
  var iconoWhatsApp = document.querySelector('.whatsapp-icon');
  var iconoWhatsApp2 = document.querySelector('.whatsapp-icon2');
  var iconoWhatsApp3 = document.querySelector('.whatsapp-icon3');

  if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20) {
    iconoWhatsApp.style.display = "block";
    iconoWhatsApp2.style.display = "block";
    iconoWhatsApp3.style.display = "block";
  } else {
    iconoWhatsApp.style.display = "block";
    iconoWhatsApp2.style.display = "block";
    iconoWhatsApp3.style.display = "block";
  }
};