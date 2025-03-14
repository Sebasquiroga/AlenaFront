const domainBackend = "http://localhost:3000";


 function showContent(option) {
     const contentSection = document.getElementById("content-area");
     let content = "";
     
     switch(option) {
         case "Productos":
             content = `<div id="submenu" class="submenu">
             <ul>
                 <li><a href="#" onclick="testing()">testing</a></li>
                 <li><a href="#" onclick="showContent('opcion2')">Crear producto</a></li>
                 <li><a href="#" onclick="showContent('opcion3')">Editar producto</a></li>
                 <li><a href="#" onclick="showContent('opcion3')">Eliminar producto</a></li>
                 <li><a href="#" onclick="showContent('opcion3')">Buscar producto</a></li>
                 <li><a href="#" onclick="showContent('opcion3')">Ver todos los productos</a></li>
             </ul>
         </div>`
             break;
         case "Proveedores":
             content = `<div id="submenu" class="submenu">
             <ul>
                 <li><a href="#" onclick="showContent('Proveedores')">Proveedores</a></li>
                 <li><a href="#" onclick="showContent('Tienda')">Tienda</a></li>
                 <li><a href="#" onclick="showContent('Productos')">Productos 3</a></li>
             </ul>
         </div>`;
             break;
         case "Tienda":
             content = "<h2>Tienda</h2><p>Informacion de la tienda.</p>";
             break;
         case "Lista":
             content = "<h2>Lista</h2><p>Lista de hoy</p>";
             break;   
         default:
             content = "<h2>Bienvenido</h2><p>Selecciona una opción del menú.</p>";
     }
     
     contentSection.innerHTML = content;
 }

 document.getElementById("logout-button").addEventListener("click", logout);

 async function logout() {await fetch(`${domainBackend}/api/logout`, { credentials: 'include'}).then(response => {alert('logout succesfull')}).then(/*res => window.location.replace("index.html")*/).catch(error => {alert('error')})}

 function testing() {alert ('hola bb')}