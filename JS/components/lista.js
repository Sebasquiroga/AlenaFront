export function init() {
  const addButton = document.getElementById('add-list-btn');
  addButton?.addEventListener('click', () => {
    alert('Agregar nueva lista');
  });
}