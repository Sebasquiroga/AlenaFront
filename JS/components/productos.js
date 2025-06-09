export function init() {
  const addButton = document.getElementById('add-products-btn');
  addButton?.addEventListener('click', () => {
    alert('Agregar nuevo producto');
  });
}