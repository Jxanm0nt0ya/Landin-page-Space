

const iconoMenu = document.querySelector("#icono-menu"),
  menu = document.querySelector("#menu");

  iconoMenu.addEventListener("click" , (e) => {

  //Alterno estilos para el menu y body//
  menu.classList.toggle("active")
  document.body.classList.toggle("opacity");

  //Alterno   su tributo "src"  para el icono del  menu //
  const rutaActual = e.target.getAttribute("src");

  if(rutaActual == "img/menu hamburguesa.png") {
    e.target.setAttribute("src", "img/menu hamburguesa.png");
  }else{
    e.target.setAttribute("src", "img/menu hamburguesa.png");
  }



});