# 📢 Nota Principal – Carga Dinámica de Componentes

Este proyecto utiliza una arquitectura modular basada en componentes reutilizables.  
El encabezado (header), entre otros elementos, se inserta dinámicamente mediante JavaScript usando `fetch()`.

---

## ⚠️ Nota importante sobre la visualización del proyecto

Los navegadores modernos **bloquean las solicitudes `fetch()` cuando el proyecto se ejecuta directamente desde el sistema de archivos**, es decir, usando rutas del tipo: `file://`.

Esto afecta a la carga automática de componentes como el header, por lo que **si abre el archivo HTML directamente desde el explorador de Windows, ciertos elementos no se mostrarán correctamente**.

---

## ✅ Forma correcta de visualizar el proyecto

Para que todos los componentes dinámicos funcionen adecuadamente, el proyecto debe ejecutarse desde un **servidor local**.  
Hay varias opciones:

### 1. Usar la extensión *Live Server* de Visual Studio Code (RECOMENDADO)
Extensión utilizada durante el desarrollo:

- **Live Server — Autor: Ritwick Dey**

Permite ejecutar el proyecto como un servidor local con un solo clic.

### 2. Usar otra extensión o servidor local de preferencia
Cualquier servidor local (VS Code, Sublime Text, Atom, etc.) también funcionará correctamente.

---

## 📌 Recomendación

Para evitar errores de carga y garantizar que el proyecto se visualice como fue diseñado, utilice **Live Server** o cualquier otro método que inicie un servidor local.
