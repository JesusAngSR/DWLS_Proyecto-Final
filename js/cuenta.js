document.addEventListener("DOMContentLoaded", () => {
    // Obtener usuario actual
    const usuario = JSON.parse(localStorage.getItem("usuarioActual"));
    if (!usuario) {
        // Redirigir al login si no hay usuario
        window.location.href = "/pages/05-login/index.html";
        return;
    }

    // Mostrar datos del usuario
    document.getElementById("user-name").textContent = `Nombre de usuario: ${usuario.nombre}`;
    document.getElementById("user-email").textContent = `Correo electrónico: ${usuario.email}`;

    // Botón cerrar sesión
    const logoutBtn = document.getElementById("logout-btn");
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("usuarioActual");
        window.location.href = "/index.html";
    });

    // Botón configuración (placeholder)
    const configBtn = document.getElementById("config-btn");
    configBtn.addEventListener("click", () => {
        alert("Aquí puedes agregar la configuración del usuario.");
    });
});

