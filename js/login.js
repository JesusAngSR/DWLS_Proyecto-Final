document.addEventListener("click", (e) => {
    if (e.target.matches("#login-btn")) {
        window.location.href = "/pages/05-login/index.html";
    }
});

function showRegister() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('register').style.display = 'block';
    document.getElementById('title').textContent = 'Crear Cuenta';
}

function showLogin() {
    document.getElementById('login').style.display = 'block';
    document.getElementById('register').style.display = 'none';
    document.getElementById('title').textContent = 'Iniciar Sesión';
}
