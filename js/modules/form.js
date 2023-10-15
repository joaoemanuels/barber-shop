export default function initForm() {

  const botaoMostrar = document.getElementById("mostrar-formulario");
  const botaoFechar = document.getElementById("fechar-formulario");
  const formulario = document.getElementById("formulario");


  botaoMostrar.addEventListener("click", function (event) {
    event.stopPropagation();
    formulario.style.display = "block";
  });

  botaoFechar.addEventListener("click", function (event) {
    event.stopPropagation();
    formulario.style.display = "none";
  });

  document.addEventListener("click", function (event) {
    if (event.target !== formulario && event.target !== botaoMostrar) {
      formulario.style.display = "none";
    }
  });

  formulario.addEventListener("click", function (event) {
    event.stopPropagation();
  });
}