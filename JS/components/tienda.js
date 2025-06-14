function mostrarFormulario (string) {const form = document.getElementById(string) /*ponerle un try catch para que cuando no exita el formulario siga en pie*/
    form.style.display = form.style.display === "none" ? "block" : "none";
  }

export function init() {
/* funciones de mostrar los formularios */
document.getElementById('add-shop-btn')?.addEventListener('click', () => {
    mostrarFormulario('FormAddShop');
  });

document.getElementById('search-shop-btn')?.addEventListener('click', () => {
    mostrarFormulario('FormSearchShop');
      });

/* funciones de fetch */


document.getElementById('FormAddShop')?.addEventListener('submit', async function(event) {
    event.preventDefault();
    const nameShop = document.getElementById("shopName").value;
    const telShop = document.getElementById("telShop").value;
    const addressShop = document.getElementById("addressShop").value;
    await fetch('http://localhost:3000/api/shop/create',
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          credentials: 'include',
          body: JSON.stringify({shopname: nameShop, tel:telShop, address: addressShop})
      }).then(response => {
        if (response.status === 201) {
            alert('Tienda creada exitosamente');
        } else if (response.status === 406) {
            alert("Error: Datos inválidos");
        } else {
            alert("Error al crear la tienda");
        }
      }).catch(error => {
        alert("Error al crear la tienda: " + error.message);
      });
  });


document.getElementById('FormSearchShop')?.addEventListener('submit', async function(event) {
    event.preventDefault();
    const nameShop = document.getElementById("searchShop").value;
    await fetch('http://localhost:3000/api/shop/find',
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          credentials: 'include',
          body: JSON.stringify({shopname: nameShop})
      }).then(response => {
        if (response.status === 201) {
            response.json().then(data => {
                alert('Tienda encontrada: ' + JSON.stringify(data));
            });
        } else if (response.status === 404) {
            alert("Error: Tienda no encontrada");
        } else {
            alert("Error al buscar la tienda");
        }
      }).catch(error => {
        alert("Error al buscar la tienda: " + error.message);
      }); })

document.getElementById('AllShops')?.addEventListener('click', async function(event) {
    event.preventDefault();
    await fetch('http://localhost:3000/api/shop/',
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "GET",
          credentials: 'include'
      }).then(response => {
        if (response.status === 201) {
            response.json().then(data => {
                alert('Todas las tiendas: ' + JSON.stringify(data));
            });
        } else {
            alert("Error al obtener las tiendas");
        }
      }).catch(error => {
        alert("Error al obtener las tiendas: " + error.message);
      })})      




  } /* corchete del init() */