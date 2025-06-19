function mostrarFormulario (string) {const form = document.getElementById(string) /*ponerle un try catch para que cuando no exita el formulario siga en pie*/
    form.style.display = form.style.display === "none" ? "block" : "none";
  }

export function init() {
  const addButton = document.getElementById('add-lista-btn');
  addButton?.addEventListener('click', () => {
    mostrarFormulario('createLista');
  });


}