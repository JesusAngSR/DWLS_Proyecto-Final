// Lista de productos disponibles
const products = [
    { id:1, name:"Procesador Intel i5", specs:"6 núcleos, 4.4GHz", price:3500, img:"https://imgs.search.brave.com/17ZD3OOOaL_VZqVCmiOI2xPu2V9wE668DcO9FIxHmac/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzgwNTcyNi1NTE00/MjAxNjQ0ODU5NF8w/NTIwMjAtVi1wcm9j/ZXNhZG9yLWludGVs/LWNvcmUtaTUtMTA0/MDAtMTBhLWdlbi02/LW51Y2xlb3Mtc29j/a2V0LTEyMDAud2Vi/cA"},
    { id:2, name:"Procesador Ryzen 7", specs:"8 núcleos, 4.6GHz", price:5200, img:"https://imgs.search.brave.com/qR1DLgl5mKN8cE9b6ezyDoDpJ447FvtmwONjJp8kcWA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzk2NTYyOC1NTEEx/MDAwMDY5NjkzNzNf/MTIyMDI1LVYud2Vi/cA"},
    { id:3, name:"Tarjeta Madre ASUS", specs:"Chipset B550", price:2800, img:"https://imgs.search.brave.com/38bpl0at4_FyHxhOHlboaduZqCedVGN4W62f0ts0z8I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzgzODIzNS1NTE00/OTY0NjgyNzA0M18w/NDIwMjItVi53ZWJw"},
    { id:4, name:"Memoria RAM 8GB", specs:"DDR4 3200MHz", price:900, img:"https://imgs.search.brave.com/4AxSbQd6gbuzUlwQCcQn8dwiJ3CiMkkHHhZksc6v6sU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF85/NjY0MTgtTUxVNzgw/Nzg1NjY1NDJfMDgy/MDI0LUYud2VicCVD/MiVCRiVDMiVCRmh0/dHBzOi8vd3d3Lm1l/cmNhZG9saWJyZS5j/b20ubXgvbWVtb3Jp/YS1yYW0tdmVuZ2Vh/bmNlLWxweC1nYW1l/ci1jb2xvci1uZWdy/by04Z2ItMS1jb3Jz/YWlyLWNtazhneDRt/MWEyNDAwYzE2L3Av/TUxNMTgzNDI4MTQl/QzIlQkYlQzIlQkZo/dHRwczovL2h0dHAy/Lm1sc3RhdGljLmNv/bS9EX05RX05QXzk2/NjQxOC1NTFU3ODA3/ODU2NjU0Ml8wODIw/MjQtRi5qcGcsaHR0/cHM6Ly9odHRwMi5t/bHN0YXRpYy5jb20v/RF9OUV9OUF83NjIw/OTEtTUxBNzQ3ODAw/MjEyMjFfMDIyMDI0/LUYuanBnLGh0dHBz/Oi8vaHR0cDIubWxz/dGF0aWMuY29tL0Rf/TlFfTlBfOTMyMjk0/LU1MVTc4MzA1MTAx/MzUxXzA4MjAyNC1G/LmpwZyxodHRwczov/L2h0dHAyLm1sc3Rh/dGljLmNvbS9EX05R/X05QXzcxNjUyMi1N/TFU3MjYwNDg2NDg4/NV8xMDIwMjMtRi5q/cGcsaHR0cHM6Ly9o/dHRwMi5tbHN0YXRp/Yy5jb20vRF9OUV9O/UF85MDA4MzMtTUxV/NzQ4Njk0NDE1MzBf/MDMyMDI0LUYuanBn/LGh0dHBzOi8vaHR0/cDIubWxzdGF0aWMu/Y29tL0RfTlFfTlBf/OTc2MzYxLU1MVTc0/ODMzNDUyNDA4XzAz/MjAyNC1GLmpwZw"},
    { id:5, name:"Memoria RAM 16GB", specs:"DDR4 3600MHz", price:1600, img:"https://imgs.search.brave.com/qVt13hzDwB00tkr4ySSaHk_vezCkVUgb3_xa5a_8jWI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hLXN0/YXRpYy5tbGNkbi5j/b20uYnIvMjgweDIx/MC9tZW1vcmlhLXJh/bS1jb3JzYWlyLXZl/bmdlYW5jZS1scHgt/ZGRyNC0xNmdiLTJ4/OGdiLTMyMDBtaHov/bm9jbm9jZXN0YWRv/c3VuaWRvcy9idXli/b3gtY3BiMDE0M3Vt/NHRjL2E1MjJiYmU4/YWJlZDRjN2ViMWNm/ZTVhMzVmZjYwMGIx/LmpwZWc"},
    { id:6, name:"Disco SSD 500GB", specs:"NVMe M.2", price:1200, img:"https://imgs.search.brave.com/-lCjsZWuPgcszoM_QLYQLQDEWPYsGSIrnwzmkKW2RZA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGNlbC5jb20v/NjAwL0hhcmR3YXJl/LURpc2Nvcy1EdXJv/cy1NZWNhbmljb3Mt/V2VzdGVybi1EaWdp/dGFsLVdENTAwMEFa/TFgtMTIxOTM0LW1z/b0hNSEw0dnN6UVh3/Qk4uanBn"},
    { id:7, name:"Disco Duro 1TB", specs:"7200RPM", price:1000, img:"https://imgs.search.brave.com/L0vLKCcQzJEBQJGb02LZnx7dTJYzHGdSuwuQfTnBK8g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGNlbC5jb20v/bXAvSGFyZHdhcmUt/RGlzY29zLUR1cm9z/LU1lY2FuaWNvcy1X/ZXN0ZXJuLURpZ2l0/YWwtV0QxMFBVUlot/MTYyNDY2LXExWDhT/WjVrWTF2Y3ZrQUMu/anBn"},
    { id:8, name:"Tarjeta Gráfica GTX 1660", specs:"6GB GDDR5", price:6500, img:"https://imgs.search.brave.com/9_T-6YbnN9Dtg6flX7AHShIIB5puYHsuTeevEQJqOD0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzk0MDc1OC1NTFU3/MDUyNTc1MTQ1N18w/NzIwMjMtVi53ZWJw"},
    { id:9, name:"Tarjeta Gráfica RTX 3060", specs:"12GB GDDR6", price:9800, img:"https://imgs.search.brave.com/gT5e2NX4-DIgcvEwU2RezC4MEfaSloucdeqJttfL860/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF0ZHVTcDhvb0wu/anBn"},
    { id:10, name:"Fuente de Poder 650W", specs:"Certificación 80+ Bronze", price:1100, img:"https://imgs.search.brave.com/LaUdGt-NuEkM0-lAge_9L0mrrq1-JigFAZuYfi8KE6A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFMOXQzbGJJMUwu/anBn"},
    { id:11, name:"Gabinete Gamer", specs:"Cristal templado", price:1500, img:"https://imgs.search.brave.com/sRWIhPgCT6uYje_JCnBNzzjlRdI_uxjGYwdSg-GcHe4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9oaWdo/cHJvLmNvbS5teC84/NDYxLWxhcmdlX2Rl/ZmF1bHQvZ2FiaW5l/dGUtbnp4dC1oOS1m/bG93LWJsYW5jby1t/aWNyby1hdHgtZWF0/eC5qcGc"},
    { id:12, name:"Monitor 24''", specs:"Full HD 144Hz", price:4200, img:"https://imgs.search.brave.com/cIr7XNTLSDZQm2s-eZ5ipa0CUwlzp_x3EDwPqGuDeVg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzk1NzU0NC1DQlQ4/NjE1NzMyNDMyNF8w/NjIwMjUtVi53ZWJw"},
    { id:13, name:"Teclado Mecánico", specs:"Switches RGB", price:1300, img:"https://imgs.search.brave.com/Kbm8itOLs_LA3ABe7hoEmEZMT9fH7_wSHTPQXO28xbc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzc5ODI3MS1NTEE5/OTQ1MzE5NDUzMF8x/MTIwMjUtVi53ZWJw"},
    { id:14, name:"Mouse Gamer", specs:"16000 DPI", price:800, img:"https://imgs.search.brave.com/lMA-MdbR7m8ZDZLFJLqV9Di8PW1W9Cubp049NUcxxjk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF82/MTgyNjQtTUxVNzI1/NzAzMjQ5NTJfMTEy/MDIzLU8ud2VicA"},
    { id:15, name:"Enfriamiento Líquido", specs:"Radiador 240mm", price:2500, img:"https://imgs.search.brave.com/mvZISyFNtPrDzuf8CEFQEBWkt6jWgSdkdEbifzriSVA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/cmVpY2hlbHQuZGUv/YmlsZGVyL3dlYi9h/cnRpa2VsX3dzL0U5/MTAvTlpYVF9STC1L/UjI0RS1CMV8wMS5q/cGc_dHlwZT1Qcm9k/dWN0Jg"},
    { id:16, name:"Ventiladores RGB", specs:"Set de 3", price:900, img:"https://imgs.search.brave.com/4_f_tD5Kxl7Kch8Xz5F8TIpR6vAi8BLrVfE5_YfXNpA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF83/NjQ3NzgtQ0JUNzE2/MzIzNDAyNzhfMDky/MDIzLVYud2VicA"},
    { id:17, name:"Tarjeta de Red", specs:"WiFi 6", price:700, img:"https://imgs.search.brave.com/2E29RiwJwn8-3rffkK3QKxJanCvQS01f5gtqmF74etc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hdWxh/dmlydHVhbC5zbGQu/Y3UvcGx1Z2luZmls/ZS5waHAvNjM0OC9t/b2RfaW1zY3AvY29u/dGVudC8xL3Rhcmpl/dGEtZGUtcmVkLXdp/ZmkuanBn"},
    { id:18, name:"Unidad DVD", specs:"Externa USB", price:600, img:"https://imgs.search.brave.com/fM-d9DyW7yvKwum8wgxbp-E6VrUQRhHJuxomeZdmEh8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzk2NjgxMy1DQlQ5/NDQ3ODk1NzI5MF8x/MDIwMjUtVi53ZWJw"},
    { id:19, name:"Memoria USB 64GB", specs:"USB 3.1", price:300, img:"https://imgs.search.brave.com/bh5LdptBcAHX3Usm4zDS57X6UM5SPX3AzfsWWKKmyT8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/N2RheXNob3AuY29t/L2ltYWdlL2NhY2hl/L2NhdGFsb2cvUHJv/ZHVjdF9JbWFnZXNf/MjAyNS9EVFhNXzY0/R0JYMi9EVFhNXzY0/R0JYMl8wMS0yNTB4/MjUwLmpwZy53ZWJw"},
    { id:20, name:"Audífonos Gamer", specs:"Sonido 7.1", price:1400, img:"https://imgs.search.brave.com/YrzzIhWluLjtrtz2lyLcZjfaMc0i21lTvY3mW9eyqtc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzgwMTQ4Ny1NTE05/MjI5NjA3OTY5Nl8w/OTIwMjUtVi53ZWJw"}
];

// Contenedor de productos
const container = document.getElementById("products");

// Obtener carrito del localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Renderizar productos en la página
products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";

    // Crear contenido del producto
    div.innerHTML = `
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>${p.specs}</p>
        <div class="price">$${p.price} MXN</div>
        <button class="cart-btn-page" onclick="addToCart(${p.id})">Agregar al carrito</button>
    `;

    // Agregar producto al contenedor
    container.appendChild(div);
});

// Función para agregar producto al carrito
function addToCart(id) {
    // Buscar producto por id
    const product = products.find(p => p.id === id);

    // Agregar al array del carrito
    cart.push(product);

    // Guardar carrito en localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Confirmación al usuario
    alert("Producto agregado ✅");
}
