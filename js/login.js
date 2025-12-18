// Crear / abrir base de datos local
let db;
const request = indexedDB.open("TechStoreDB", 1);

request.onupgradeneeded = function (event) {
    db = event.target.result;
    if (!db.objectStoreNames.contains("usuarios")) {
        const usersStore = db.createObjectStore("usuarios", { keyPath: "email" });
        usersStore.createIndex("email", "email", { unique: true });
    }
};

request.onsuccess = function (event) {
    db = event.target.result;
};

request.onerror = function () {
    console.error("Error al abrir IndexedDB");
};

// Manejo de interfaz (login / registro)
function showRegister() {
    const loginBox = document.getElementById("login");
    const registerBox = document.getElementById("register");
    loginBox.style.display = "none";
    registerBox.style.display = "block";
    registerBox.classList.remove("box-sing-in-animation");
    void registerBox.offsetWidth;
    registerBox.classList.add("box-sing-in-animation");
    document.getElementById("title").textContent = "Crear Cuenta";
}

function showLogin() {
    const loginBox = document.getElementById("login");
    const registerBox = document.getElementById("register");
    registerBox.style.display = "none";
    loginBox.style.display = "block";
    loginBox.classList.remove("box-sing-in-animation");
    void loginBox.offsetWidth;
    loginBox.classList.add("box-sing-in-animation");
    document.getElementById("title").textContent = "Iniciar Sesión";
}

// Validaciones
function validarEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Listeners generales
document.addEventListener("click", (e) => {

    // Botón de login
    if (e.target.matches("#login button")) {
        const email = document.querySelector("#login input[placeholder='Correo electrónico']").value.trim();
        const password = document.querySelector("#login input[placeholder='Contraseña']").value.trim();
        if (!email || !password) {
            alert("Completa todos los campos.");
            return;
        }
        if (!validarEmail(email)) {
            alert("Correo inválido.");
            return;
        }
        const tx = db.transaction("usuarios", "readonly");
        const store = tx.objectStore("usuarios");
        const req = store.get(email);
        req.onsuccess = () => {
            const user = req.result;
            if (!user) {
                alert("Correo no registrado. Por favor regístrate.");
                return;
            }
            if (user.password !== password) {
                alert("Contraseña incorrecta.");
                return;
            }
            localStorage.setItem("usuarioActual", JSON.stringify(user));
            if (confirm(`¡Bienvenido ${user.nombre}!`)) {
                window.location.href = "/index.html";
            }
        };
    }

    // Botón de registro
    if (e.target.matches("#register button")) {
        const nombre = document.querySelector("#register input[placeholder='Nombre completo']").value.trim();
        const email = document.querySelector("#register input[placeholder='Correo electrónico']").value.trim();
        const password = document.querySelector("#register input[placeholder='Contraseña (mín. 6 caracteres)']").value.trim();

        if (!nombre || !email || !password) {
            alert("Completa todos los campos.");
            return;
        }

        if (!validarEmail(email)) {
            alert("Correo inválido.");
            return;
        }

        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        const tx = db.transaction("usuarios", "readwrite");
        const store = tx.objectStore("usuarios");

        const getRequest = store.get(email);
        getRequest.onsuccess = () => {
            if (getRequest.result) {
                alert("Este correo ya está registrado.");
            } else {
                store.add({ nombre, email, password }).onsuccess = () => {
                    alert("Registro exitoso. Ahora inicia sesión.");
                    showLogin();
                };
            }
        };
    }
});

// Ejecutar animaciones al cargar página (CORREGIDO)
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("registro") === "1") {
        showRegister();
    } else {
        showLogin();
    }
});
