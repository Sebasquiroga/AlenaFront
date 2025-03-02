const domainBackend = "http://localhost:3000";

async function logout() {
 await fetch(`${domainBackend}/api/logout`, {
    method: "GET",
    credentials: 'include'
}).then(response => {alert("¡sesion cerrada")})
}