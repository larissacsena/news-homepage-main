
function mostrarMenu() {
  let itensMenu = document.querySelector(".hamburguer-lista ul li");
  console.log(itensMenu)

  if (itensMenu.style.display === "flex") {
    itensMenu.style.display = "none";
  } else {
    itensMenu.style.display = "flex";
  }
}
