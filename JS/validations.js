const domainBackend = "http://localhost:3000";

async function logout() {
 await fetch(`${domainBackend}/api/logout`, {
    method: "GET",
    credentials: 'include'
}).then(response => {alert("¡sesion cerrada!")})
}

async function test() {
    await fetch(`${domainBackend}/api/cookietest`, {
        method: "GET",
        credentials: 'include'
    }).then(response => {alert("Test de cookie")})
}

function showContent(option) {
    const contentSection = document.getElementById("content-area");
    let content = "";
    
    switch(option) {
        case "Productos":
            content = "<h2>Productos</h2><p>Lista de productos.</p>";
            break;
        case "Proveedores":
            content = "<h2>Proveedores</h2><p>Opciones de proveedores</p>";
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