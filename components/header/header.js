// Función para cargar el header desde un archivo HTML y asignar eventos
function cargarHeaderYAsignarEventos() {
    document.querySelectorAll('[include-html]').forEach(el => {
        const file = el.getAttribute('include-html');
        if (!file) return;

        // Fetch para obtener el contenido del header
        fetch(file)
            .then(response => response.text())
            .then(data => {
                el.innerHTML = data; // Insertar contenido HTML en el elemento
                asignarEventosHeader(); // Asignar eventos una vez cargado el HTML
            })
            .catch(err => console.error("Error cargando header:", err));
    });
}

// Función para asignar eventos a botones del header
function asignarEventosHeader() {
    // Botón Iniciar Sesión
    const loginBtn = document.querySelector("#login-btn");
    if (loginBtn) {
        loginBtn.onclick = () => window.location.href = "/pages/05-login/index.html";
    }

    // Botón Registrarse
    const signInBtn = document.querySelector(".sign-in");
    if (signInBtn) {
        signInBtn.onclick = () => window.location.href = "/pages/05-login/index.html?registro=1";
    }

    // Botones del carrito de compras
    document.querySelectorAll(".cart-btn").forEach(btn => {
        btn.onclick = () => window.location.href = "/pages/07-carrito/index.html";
    });

    // Botón de cuenta si el usuario está logueado
    const usuario = JSON.parse(localStorage.getItem("usuarioActual"));
    const headerAccess = document.querySelector(".header-access");

    if (usuario && headerAccess) {
        // Ocultar botones de login y registro
        if (loginBtn) loginBtn.style.display = "none";
        if (signInBtn) signInBtn.style.display = "none";

        // Evitar duplicados del botón de cuenta
        if (headerAccess.querySelector(".account-btn")) return;

        // Crear botón de cuenta con el nombre del usuario
        const cuentaBtn = document.createElement("button");
        const primerNombre = usuario.nombre.split(" ")[0];
        cuentaBtn.textContent = primerNombre;
        cuentaBtn.classList.add("account-btn");

        // Animación de aparición solo la primera vez
        const animKey = `animatedCuenta_${usuario.email}`;
        if (!localStorage.getItem(animKey)) {
            cuentaBtn.classList.add("fade-in");
            localStorage.setItem(animKey, "true");
        }

        // Redirigir al perfil al hacer click
        cuentaBtn.onclick = () => window.location.href = "/pages/06-cuenta/index.html";
        headerAccess.appendChild(cuentaBtn);
    }
}

// Ejecutar la carga del header cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", cargarHeaderYAsignarEventos);

// Ejecutar con retrasos adicionales para asegurar carga de elementos dinámicos
setTimeout(cargarHeaderYAsignarEventos, 100);
setTimeout(asignarEventosHeader, 500);
