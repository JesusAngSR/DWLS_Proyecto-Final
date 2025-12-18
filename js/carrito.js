// Obtener contenedor del carrito y elemento del total
const cartContainer = document.getElementById("cart-container");
const totalEl = document.getElementById("total");

// Obtener carrito desde localStorage o inicializar vacío
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Verificar si el carrito está vacío
if(cart.length === 0){
    // Mostrar mensaje de carrito vacío
    cartContainer.innerHTML = "<p>El carrito está vacío</p>";
} else {
    // Inicializar total
    let total = 0;

    // Recorrer productos y agregarlos al DOM
    cart.forEach((p, index) => {
        total += p.price;

        const div = document.createElement("div");
        div.className = "product";

        // Crear estructura interna del producto
        div.innerHTML = `
            <img src="${p.img}">
            <h3>${p.name}</h3>
            <p>${p.specs}</p>
            <div class="price">$${p.price} MXN</div>
            <button onclick="removeFromCart(${index})">Eliminar</button>
        `;

        // Agregar producto al contenedor
        cartContainer.appendChild(div);
    });

    // Mostrar total acumulado
    totalEl.innerText = `Total: $${total} MXN`;
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
    // Eliminar producto del array
    cart.splice(index, 1);

    // Guardar cambios en localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Recargar la página para actualizar el carrito
    location.reload();
}
