// Obtener el botón de exportar usuarios
const exportBtn = document.getElementById("export-Btn");

// Deshabilitar botón hasta que IndexedDB esté lista
exportBtn.disabled = true;

// Inicializar variable db
let db;

// Abrir o crear la base de datos "TechStoreDB" versión 1
const request = indexedDB.open("TechStoreDB", 1);

// Evento para crear la estructura de la base de datos si no existe
request.onupgradeneeded = function (event) {
    db = event.target.result;

    // Crear objectStore "usuarios" si no existe
    if (!db.objectStoreNames.contains("usuarios")) {
        const usersStore = db.createObjectStore("usuarios", { keyPath: "email" });
        // Crear índice único por email
        usersStore.createIndex("email", "email", { unique: true });
    }
};

// Evento al abrir la base de datos correctamente
request.onsuccess = function (event) {
    db = event.target.result;
    // Habilitar botón cuando la DB esté lista
    exportBtn.disabled = false;
};

// Evento si ocurre un error al abrir la base de datos
request.onerror = function () {
    console.log("Error al abrir IndexedDB");
    alert("No se pudo abrir la base de datos.");
};

// Evento click del botón para exportar usuarios
exportBtn.addEventListener("click", function() {
    // Verificar que la base de datos esté lista
    if (!db) {
        alert("La base de datos aún no está lista");
        return;
    }

    // Crear transacción de solo lectura en el objectStore "usuarios"
    const tx = db.transaction("usuarios", "readonly");
    const store = tx.objectStore("usuarios");
    const req = store.getAll();

    // Evento éxito al obtener todos los usuarios
    req.onsuccess = () => {
        const usuarios = req.result || [];

        // Verificar si hay usuarios para exportar
        if (usuarios.length === 0) {
            alert("No hay usuarios para exportar");
            return;
        }

        // Crear archivo JSON descargable
        const json = JSON.stringify(usuarios, null, 2);
        const blob = new Blob([json], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        // Crear enlace temporal para descargar el JSON
        const a = document.createElement("a");
        a.href = url;
        a.download = "usuarios.json";
        a.click();
        URL.revokeObjectURL(url);
    };

    // Evento error al obtener los usuarios
    req.onerror = () => {
        alert("Error al obtener usuarios desde IndexedDB");
    };
});
