function mostrarFormulario (string) {const form = document.getElementById(string) /*ponerle un try catch para que cuando no exita el formulario siga en pie*/
    form.style.display = form.style.display === "none" ? "block" : "none";
  }


export function init() {
  const addButton = document.getElementById('add-products-btn');
  addButton?.addEventListener('click', () => {
    mostrarFormulario('createProduct');
  });
  
  const searchButton = document.getElementById('search-products-btn');
  searchButton?.addEventListener('click', () => {
    mostrarFormulario('searchProduct');
  });

    const deleteButton = document.getElementById('delete-products-btn');
  deleteButton?.addEventListener('click', () => {
    mostrarFormulario('deleteProduct');
  })

      const editButton = document.getElementById('edit-products-btn');
    editButton?.addEventListener('click', () => {
    mostrarFormulario('editProduct');
  });


  
/* fetch de productos */
document.getElementById('createProduct')?.addEventListener('submit', async function(event) {
    event.preventDefault();
    const productname = document.getElementById("product-name").value;
    const opcionesCompra = document.getElementById("opcionesCompra").value;
    const opcionesnewVenta = document.getElementById("opcionesnewVenta").value;

    await fetch('http://localhost:3000/api/product/create',
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          credentials: 'include',
          body: JSON.stringify({product_name: productname, formato: opcionesCompra, formato_de_newventa: opcionesnewVenta})
      }).then(response => {
        if (response.status === 201) {
            alert('Producto creado exitosamente');
        } else if (response.status === 400) {
            alert("Error: Datos inválidos");
        } else {
            alert("Error al crear el producto");
        }
      }).catch(error => {
        alert("Error al crear el producto: " + error.message);
      });
  });

document.getElementById('searchProduct')?.addEventListener('submit', async function(event) {
    event.preventDefault();
    const productName = document.getElementById("search-product").value;

    await fetch(`http://localhost:3000/api/product/findproduct`,
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          credentials: 'include',
           body: JSON.stringify({search: productName})
      }).then(response => {
        if (response.status === 201) {
            return response.json();
        } else if (response.status === 404) {
            alert("Producto no encontrado");
        } else {
            alert("Error al buscar el producto");
        }
      }).then(data => {
        if (data) {
            console.log(data);
            // Aquí puedes mostrar los datos del producto en el DOM
        }
      }).catch(error => {
        alert("Error al buscar el producto: " + error.message);
      });
  });  

document.getElementById('deleteProduct')?.addEventListener('submit', async function(event) {
    event.preventDefault();
    const productName = document.getElementById("delete-product").value;
  await fetch(`http://localhost:3000/api/product/delete`,
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "DELETE",
          credentials: 'include',
          body: JSON.stringify({product: productName})
      }).then(response => {
        if (response.status === 201) {
            alert('Producto eliminado exitosamente');
        } else if (response.status === 404) {
            alert("Producto no encontrado");
        } else {
            alert("Error al eliminar el producto");
        }
      }).catch(error => {
        alert("Error al eliminar el producto: " + error.message);
      });
  }); 
  
document.getElementById('editProduct')?.addEventListener('submit', async function(event) {
    event.preventDefault();
    const productName = document.getElementById("productName").value;
    const newCompra = document.getElementById("newopcionesCompra").value;
    const newVenta = document.getElementById("newopcionesVenta").value;
  fetch(`http://localhost:3000/api/product/update`,

      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "PATCH",
          credentials: 'include',
          body: JSON.stringify({productName: productName, compra: newCompra, venta: newVenta
})
      }).then(response => {
        if (response.status === 201) {
            alert('Producto editado exitosamente');
        } else if (response.status === 404) {
            alert("Producto no encontrado");
        } else {
            alert("Error al editar el producto");
        }
      }).catch(error => {
        alert("Error al editar el producto: " + error.message);
      });
})

} /* Corchete de init*/
