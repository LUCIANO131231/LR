// Esta función se ejecuta cuando todos los recursos de la ventana se han cargado
$(window).on('load', function(){

  // Anima el elemento hacia arriba
  gsap.to('#loader', 1, {y:"-100%"});
  // Anima la opacidad del elemento
  gsap.to('#loader', 1, {opacity:1});
  // Oculta el elemento
  gsap.to('#loader', 1, {display:"none", delay:1});
  // Hace visible el elemento
  gsap.to('#header', 0, {display:"block", delay:1});
  // Inicialmente oculta el elemento con id "navigation-content" sin animación
  gsap.to('#navigation-content', 0, {display:"none"});
  // Muestra el elemento con id "navigation-content" con diseño flexible después de 0 segundo
  gsap.to('#navigation-content', 0, {display:"flex", delay:1});
});

$(function(){
  // Selecciona todos los elementos con la clase 'color-panel' y asigna un evento de clic
  $('.color-panel').on("click", function(e) {
    e.preventDefault();
    // Alterna la clase 'color-changer-active' en los elementos con la clase 'color-changer'
    $('.color-changer').toggleClass('color-changer-active');
  });
  // Selecciona todos los elementos <a> dentro de elementos con la clase 'colors' y asigna un evento de clic
  $('.colors a').on("click", function(e) {
    e.preventDefault();
    // Obtiene el valor del atributo 'title' del elemento clicado
    var attr = $(this).attr("title");
    console.log(attr);
    // Añade un nuevo enlace de hoja de estilo al elemento <head> con el archivo CSS correspondiente
    $('head').append('<link rel="stylesheet" href="css/' + attr + '.css">');
  });

});

$(function(){

  $('.menubar').on('click', function(){
    // PARA MOSTRAR LAS OPCIONES moviéndolo hacia abajo (y: 0) en 0.6 segundos
    gsap.to('#navigation-content', 0.6, {y: 0});
  });
  $('.navigation-close').on('click', function(){
  
    // PARA CERRAR hacia arriba (y: "-100%") en 0.6 segundos
    gsap.to('#navigation-content', 0.6, {y: "-100%"});
  });

});
 
$(function() {
    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
        var that = this;
        var delta = 200 - Math.random() * 100;
        if (this.isDeleting) { 
            delta /= 2; 
        }
        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 100;
        }
      
        setTimeout(function() {
            that.tick();
        }, delta);
    };
      
    window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0em solid #666 ; }";
        document.body.appendChild(css);
    };
});


// Configura manejadores de eventos para los enlaces de navegación
$(function() {
  // Manejador para el enlace 'About'
  $('#about-link').on('click', function() {
      // Configura animaciones para ocultar y mostrar secciones
      gsap.to('#navigation-content', 0, { display: "none", delay: 0.7 }); //desaparece
      gsap.to('#navigation-content', 0, { y: '-100%', delay: 0.7 }); //avanza hacia arriba en 0
      gsap.to('#header', 0, { display: "none" });
      gsap.to('#blog, #portfolio, #contact', 0, { display: "none" });
      gsap.to('#breaker, #breaker-two', 0, { display: "block" });
      gsap.to('#breaker, #breaker-two', 0, { display: "none", delay: 2 }); //transicion para pasar a la otra pagina
      gsap.to('#about', 0, { display: "block", delay: 0.7 });
      gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  });

  // Manejador para el enlace 'Contact'
  $('#contact-link').on('click', function() {
      gsap.to('#navigation-content', 0, { display: "none", delay: 0.7 });
      gsap.to('#navigation-content', 0, { y: '-100%', delay: 0.7 });
      gsap.to('#header, #about, #blog, #portfolio', 0, { display: "none" });
      gsap.to('#breaker, #breaker-two', 0, { display: "block" });
      gsap.to('#breaker, #breaker-two', 0, { display: "none", delay: 2 });
      gsap.to('#contact', 0, { display: "block", delay: 0.7 });
      gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  });

  // Manejador para el enlace 'Portfolio'
  $('#portfolio-link').on('click', function() {
      gsap.to('#navigation-content', 0, { display: "none", delay: 0.7 });
      gsap.to('#navigation-content', 0, { y: '-100%', delay: 0.7 });
      gsap.to('#header, #about, #contact, #blog', 0, { display: "none" });
      gsap.to('#breaker, #breaker-two', 0, { display: "block" });
      gsap.to('#breaker, #breaker-two', 0, { display: "none", delay: 2 });
      gsap.to('#portfolio', 0, { display: "block", delay: 0.7 });
      gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  });

  // Manejador para el enlace 'Blog'
  $('#blog-link').on('click', function() {
      gsap.to('#navigation-content', 0, { display: "none", delay: 0.7 });
      gsap.to('#navigation-content', 0, { y: '-100%', delay: 0.7 });
      gsap.to('#header, #about, #portfolio, #contact', 0, { display: "none" });
      gsap.to('#breaker, #breaker-two', 0, { display: "block" });
      gsap.to('#breaker, #breaker-two', 0, { display: "none", delay: 2 });
      gsap.to('#blog', 0, { display: "block", delay: 0.7 });
      gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  });

  // Manejador para el enlace 'Home'
  $('#home-link').on('click', function() {
      gsap.to('#navigation-content', 0, { display: "none", delay: 0.7 });
      gsap.to('#navigation-content', 0, { y: '-100%', delay: 0.7 });
      gsap.to('#about, #portfolio, #contact, #blog', 0, { display: "none" });
      gsap.to('#breaker, #breaker-two', 0, { display: "block" });
      gsap.to('#breaker, #breaker-two', 0, { display: "none", delay: 2 });
      gsap.to('#header', 0, { display: "block", delay: 0.7 });
      gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  });
});


$(function(){
  // Selecciona el elemento body y el cursor
  var body = document.querySelector('body');
  var $cursor = $('.cursor');

  // Función para mover el cursor
  function cursormover(e){
    gsap.to($cursor, {
      x: e.clientX,
      y: e.clientY,
      stagger: 0.002  // Diferencia de tiempo entre las animaciones de los cursores
    });
  }

  // Función para el efecto hover del cursor
  function cursorhover(e){
    gsap.to($cursor, {
      scale: 1.4,     // Escala cuando el cursor está en hover
      opacity: 1      // Opacidad cuando el cursor está en hover
    });
  }

  // Función para el comportamiento normal del cursor
  function cursor(e){
    gsap.to($cursor, {
      scale: 1,       // Escala normal del cursor
      opacity: 0.6    // Opacidad normal del cursor
    });
  }

  // Asigna las funciones a eventos
  $(window).on('mousemove', cursormover);          // Mueve el cursor con el movimiento del ratón
  $('.menubar').hover(cursorhover, cursor);        // Efecto hover para la barra de menú
  $('a').hover(cursorhover, cursor);               // Efecto hover para los enlaces
  $('.navigation-close').hover(cursorhover, cursor);// Efecto hover para el botón de cierre de navegación
});
