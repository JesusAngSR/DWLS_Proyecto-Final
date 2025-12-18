document.addEventListener('DOMContentLoaded', () => {
    // Lista de PCs armadas
    const pcs = [
        {
            id: 1,
            name: "TechStarter 12400",
            category: "entry",
            price: 12000,
            image: "https://zttbuilds.com/cdn/shop/files/1-Red.png?v=1762807799&width=5625",
            specs: [
                "Intel i3-12100F",
                "RTX 3050 6GB",
                "16GB RAM DDR4",
                "SSD 500GB NVMe",
                "600W 80+ Bronze"
            ]
        },
        {
            id: 2,
            name: "Gamer Pro Ryzen 5600",
            category: "mid",
            price: 18000,
            image: "https://zttbuilds.com/cdn/shop/files/fa9aa8b9-125a99_46ffa7d3e1784325aa7653bf0d8babc9_mv2.png?v=1756779068&width=5760",
            specs: [
                "Ryzen 5 5600X",
                "RTX 3060 12GB",
                "32GB RAM 3200MHz",
                "SSD 1TB NVMe",
                "750W 80+ Gold"
            ]
        },
        {
            id: 3,
            name: "Beast RTX 4070 Ti",
            category: "high",
            price: 37999,
            image: "https://zttbuilds.com/cdn/shop/files/1_77dc41e1-bf3b-4820-9369-36c3310a6695.png?v=1760222163&width=5760",
            specs: [
                "Ryzen 7 7800X3D",
                "RTX 4070 Ti 12GB",
                "32GB RAM DDR5",
                "SSD 2TB Gen4",
                "850W 80+ Platinum"
            ]
        },
        {
            id: 4,
            name: "Ultra Titan 4090",
            category: "ultra",
            price: 55000,
            image: "https://zttbuilds.com/cdn/shop/files/1-2.png?v=1762374908&width=5760",
            specs: [
                "Intel i9-14900K",
                "RTX 4090 24GB",
                "64GB RAM DDR5 6000MHz",
                "SSD 4TB Gen5",
                "1200W 80+ Platinum"
            ]
        }
    ];

    // Contenedor de la grilla
    const grid = document.getElementById('pcs-grid');
    // Renderizar PCs en la grilla
    function renderPCs(filtered = pcs) {
        grid.innerHTML = ''; // Limpiar contenido previo
        filtered.forEach(pc => {
            // Crear card de PC
            const card = document.createElement('div');
            card.className = 'pc-card';
            card.innerHTML = `
                <img src="${pc.image}" alt="${pc.name}" class="pc-image">
                <div class="pc-info">
                    <span class="pc-badge badge-${pc.category}">${pc.category.toUpperCase()}</span>
                    <h3 class="pc-name">${pc.name}</h3>
                    <ul class="pc-specs">
                        ${pc.specs.map(spec => `<li><strong>•</strong> ${spec}</li>`).join('')}
                    </ul>
                    <div class="pc-price">$${pc.price.toLocaleString('es-CL')}</div>
                    <button class="btn-add-cart">Añadir al Carrito</button>
                </div>
            `;
            grid.appendChild(card); // Agregar card al DOM
        });

        // Funcionalidad de botones agregar al carrito
        document.querySelectorAll('.btn-add-cart').forEach((btn, index) => {
            btn.addEventListener('click', () => addToCart(filtered[index]));
        });
    }

    // Agregar PC al carrito
    function addToCart(pc) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        // Crear objeto con info necesaria
        const productToAdd = {
            id: pc.id,
            name: pc.name,
            specs: pc.specs.join(', '),
            price: pc.price,
            img: pc.image
        };

        cart.push(productToAdd); // Agregar al carrito
        localStorage.setItem('cart', JSON.stringify(cart)); // Guardar en localStorage
        alert(`${pc.name} ha sido agregado al carrito 🛒`); // Mensaje de confirmación
    }
    // Filtrar PCs por categoría
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            btn.classList.add('active');

            const category = btn.dataset.category;
            const filtered = category === 'all' ? pcs : pcs.filter(pc => pc.category === category);
            renderPCs(filtered); // Renderizar filtradas
        });
    });
    // Cargar todas las PCs al inicio
    renderPCs();
});
