function mostrarFormulario (string) {const form = document.getElementById(string) /*ponerle un try catch para que cuando no exita el formulario siga en pie*/
    form.style.display = form.style.display === "none" ? "block" : "none";
  }


export function init() {


  const findButton = document.getElementById('search-provider-btn');
    findButton?.addEventListener('click', () => {
    mostrarFormulario('findProvider');
    });
  
  const createButton = document.getElementById('create-provider-btn');
    createButton?.addEventListener('click', () => {
    mostrarFormulario('createProvider');
 });
/*funciones de los botones de proveedores*/

document.getElementById('findProvider')?.addEventListener('submit', async function(event) {
    event.preventDefault();
  const providerName = document.getElementById("providerName").value;
  console.log(providerName);
  await fetch(`http://localhost:3000/api/providers/provider`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ provider: providerName })
  }).then(response => {
    if (response.status === 201) {response.json()
    } else if (response.status === 404) {
      alert("Proveedor no encontrado");
    } else {
      alert("Error al buscar el proveedor");
    }
  }).catch(error => {
    alert("Error al buscar el proveedor: " + error.message);
  })
})


} /* corchete del init */