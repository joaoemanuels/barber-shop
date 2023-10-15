const botoesMostrar = document.getElementsByClassName("mostrar-formulario");
const botoesFechar = document.getElementsByClassName("fechar-formulario");
const formularios = document.getElementsByClassName("formulario");

for (let i = 0; i < botoesMostrar.length; i++) {
  botoesMostrar[i].addEventListener("click", function (event) {
    event.stopPropagation();
    const formulario = formularios[i];
    formulario.style.display = "block";
  });
}

for (let i = 0; i < botoesFechar.length; i++) {
  botoesFechar[i].addEventListener("click", function (event) {
    event.stopPropagation();
    const formulario = formularios[i];
    formulario.style.display = "none";
  });
}

document.addEventListener("click", function (event) {
  for (let i = 0; i < formularios.length; i++) {
    if (event.target !== formularios[i] && event.target !== botoesMostrar[i]) {
      formularios[i].style.display = "none";
    }
  }
});

for (let i = 0; i < formularios.length; i++) {
  formularios[i].addEventListener("click", function (event) {
    event.stopPropagation();
  });
}
