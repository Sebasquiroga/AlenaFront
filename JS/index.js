const domainBackend = "http://localhost:3000";
const domainFrontEnd = "http://127.0.0.1:5500"
document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
   
    fetch(`${domainBackend}/api/login`,
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            credentials: 'include',        
            body: JSON.stringify({username: username, password: password})
        }
    ).then(response => {
        if (response.status === 201) {window.location.href = `${domainFrontEnd}/HTML/dashboard.html`;             
                 } 
        else if (response.status === 401) {
            errorMessage.innerText = "Invalid username";}
        else {
            errorMessage.innerText = "Invalid username or password";}
    }).catch(error => {
        errorMessage.innerText = "Invalid username or password";
    })
})