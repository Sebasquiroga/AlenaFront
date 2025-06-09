export async function loadModule(moduleName) {
  try {
    const module = await import(`./components/${moduleName}.js`);
    const html = await fetch(`../HTML/templates/${moduleName}.html`)
      .then(res => res.text());

    const container = document.getElementById('content-area');
    container.innerHTML = html;

    module.init();  // Llama la función principal del módulo
  } catch (err) {
    console.error('Error cargando el módulo:', err);
  }
}