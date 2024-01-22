var swiper = new Swiper(".mySwiper",{
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate:15,
        strech:0,
        depth:300,
        modifier:1,
        slideShadows: true,
    },
    loop:true,
});

$(document).ready(function(){
    $('.wrapper').slick({
      dots: true, // Muestra los puntos de navegación
      infinite: true, // Habilita el bucle infinito
      speed: 500, // Velocidad de la transición en milisegundos
      slidesToShow: 3, // Número de tarjetas que se muestran a la vez
      slidesToScroll: 1, // Número de tarjetas que se desplazan en cada transición
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });


  function abrirWhatsApp() {
    window.open('https://api.whatsapp.com/send?phone=936922958', '_blank');
  }

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





  
  $(document).ready(function () {
    // Obtener la URL actual
    var currentUrl = window.location.href;

    // Obtener la URL vinculada al enlace 'NOSOTROS'
    var nosotrosLinkUrl = $('#nosotros-link .header-link').attr('href');

    // Comparar las URL y agregar la clase 'active' si son iguales
    if (currentUrl === nosotrosLinkUrl) {
      $('#nosotros-link .header-link').addClass('active');
    }

    // Cuando el mouse entra en el enlace 'NOSOTROS'
    $('#nosotros-link').mouseenter(function () {
      // Agrega la clase 'hover' al enlace
      $(this).find('.header-link').addClass('hover');
    });

    // Cuando el mouse sale del enlace 'NOSOTROS'
    $('#nosotros-link').mouseleave(function () {
      // Elimina la clase 'hover' del enlace
      $(this).find('.header-link').removeClass('hover');
    });
  });