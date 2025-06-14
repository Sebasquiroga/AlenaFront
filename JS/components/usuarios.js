const domainBackend = "http://localhost:3000";
const domainFrontEnd = "http://127.0.0.1:5500"

function mostrarFormulario (string) { const form = document.getElementById(string) /*ponerle un try catch para que cuando no exita el formulario siga en pie*/
    form.style.display = form.style.display === "none" ? "block" : "none";
  }

export async function init() {
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
  })
const searchUserButton = document.getElementById('search-user-btn')
  searchUserButton?.addEventListener('click', ()=>{
    mostrarFormulario("searchUser")})
 
document.getElementById('searchUser')?.addEventListener('submit', async function(event) {event.preventDefault()
  const usuarioSearch = document.getElementById("usuarioSearch").value;
 await fetch(`${domainBackend}/api/finduser`,
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        credentials: 'include',
        body: JSON.stringify({username: usuarioSearch})        
    }).then(response => {
    if (response.status === 201) {  
        response.json().then(data => { 
           document.getElementById("miTablaBody").innerHTML = "";            
           console.log(data[0]);
            const table = document.getElementById("miTabla")
            table.style.display = table.style.display === "none" ? "block" : "none";
            // Limpiar el contenido previo
            const headerRow = document.createElement('tr');
             data.forEach(user => {
              const fila = document.createElement('tr');
              fila.innerHTML = `
                  <td>${user.username}</td>
                  <td>${user.idTienda}</td>
                `;

               table.appendChild(fila);
             })
            
           

            console.log(data);
        });
    } else if (response.status === 404) {
        alert("Error: Usuario no encontrado");
    } else {
        alert("Error al buscar el usuario");
    }})
})

const deleteUserButton = document.getElementById('delete-user-btn')
    deleteUserButton?.addEventListener('click', () => {
    mostrarFormulario("DeleteUser")  
  })

document.getElementById('DeleteUser')?.addEventListener('submit', async function(event) {event.preventDefault()
  const usuarioDelete = document.getElementById("usuarioDelete").value;
  await fetch(`${domainBackend}/api/delete`,
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "DELETE",
        credentials: 'include',
        body: JSON.stringify({username: usuarioDelete})        
    }).then((response) => {
      if (response.status === 202) {
        alert('Usuario eliminado exitosamente');
      } if (response.status === 404) {
        alert("Error: Usuario no encontrado");        
      } else {
         alert("Error: ");              }
    }).catch(error => {
    alert("Error al eliminar el usuario: " + error.message);})
  })
}


