const domainBackend = "http://localhost:3000";
const domainFrontEnd = "http://127.0.0.1:5500"

export function mostrarFormulario (string) { const form = document.getElementById(string) /*ponerle un try catch para que cuando no exita el formulario siga en pie*/
    form.style.display = form.style.display === "none" ? "block" : "none";
  }

export function init() {
  const addButton = document.getElementById('add-user-btn');
  addButton?.addEventListener('click', () => {
    mostrarFormulario("formularioCreateUser")  
  })
document.getElementById('formularioCreateUser')?.addEventListener('submit', async function(event) {event.preventDefault()
  const username = document.getElementById("nameUser").value;
  const password = document.getElementById("passwordUser").value;
  await fetch('http://localhost:3000/api/create',
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        credentials: 'include',        
        body: JSON.stringify({username: username, password: 'password'})
    }
).then(response => {
    if (response.status === 201) {  
        alert('Usuario creado exitosamente');
    } else if (response.status === 400) {
        alert("Error: Datos inválidos");
    } else {
        alert("Error al crear el usuario");
    }}).catch(error => {
    alert("Error al crear el usuario: " + error.message);})
})}