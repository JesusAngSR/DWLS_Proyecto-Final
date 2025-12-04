// pages/02-pcs-armadas/pcs-armadas.js
document.addEventListener('DOMContentLoaded', () => {
    const pcs = [
        {
            id: 1,
            name: "TechStarter 12400",
            category: "entry",
            price: 649000,
            image: "https://img.pccomponentes.com/pcbox/articulos/1000/1000504-pcs-armadas-entrada.jpg",
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
            price: 989000,
            image: "https://img.pccomponentes.com/pcbox/articulos/1000/1000506-pcs-armadas-media.jpg",
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
            price: 1799000,
            image: "https://img.pccomponentes.com/pcbox/articulos/1000/1000508-pcs-armadas-alta.jpg",
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
            price: 3899000,
            image: "https://img.pccomponentes.com/pcbox/articulos/1000/1000510-pcs-armadas-ultra.jpg",
            specs: [
                "Intel i9-14900K",
                "RTX 4090 24GB",
                "64GB RAM DDR5 6000MHz",
                "SSD 4TB Gen5",
                "1200W 80+ Platinum"
            ]
        }
    ];

    const grid = document.getElementById('pcs-grid');

    function renderPCs(filtered = pcs) {
        grid.innerHTML = '';
        filtered.forEach(pc => {
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
            grid.appendChild(card);
        });
    }

    // Filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            const filtered = category === 'all' ? pcs : pcs.filter(pc => pc.category === category);
            renderPCs(filtered);
        });
    });

    // Cargar todas al inicio
    renderPCs();
});
