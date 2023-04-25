// Función utilizada para reducir el tamaño de la barra de navegación, eliminando los rellenos y añadiendo un fondo negro
$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".nav").addClass("affix");
    console.log("OK");
  } else {
    $(".nav").removeClass("affix");
  }
});

// Función utilizada para añadir el botón de menú hamburguesa
$(".navTrigger").click(function () {
  $(this).toggleClass("active");
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});

// Añade una transición CSS para que la navegación se cierre suavemente después de hacer clic en un enlace
$("#mainListDiv .navlinks a").click(function () {
  $("#mainListDiv").removeClass("show_list");
  $(".navTrigger").removeClass("active");
});

// Agrega una transición CSS para que la navegación se cierre suavemente después de hacer clic en el botón de menú hamburguesa
$("#mainListDiv").on("transitionend", function () {
  if (!$("#mainListDiv").hasClass("show_list")) {
    $("#mainListDiv").addClass("hide_list");
  }
});
