import { loadModule } from './router.js';

const menuButtons = document.querySelectorAll('#menu button');

menuButtons.forEach(button => {
  button.addEventListener('click', async () => {
    const moduleName = button.dataset.module;
    await loadModule(moduleName);
  });
});