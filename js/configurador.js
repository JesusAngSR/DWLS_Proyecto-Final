document.addEventListener("DOMContentLoaded", () => {
  // Productos disponibles
  const components = {
    motherboard: [
      { name: "MSI B550", price: 1200, img: "/assets/img/productos/mb1.jpg" },
      { name: "ASUS ROG Strix", price: 5400, img: "/assets/img/productos/mb2.jpg" }
    ],
    cpu: [
      { name: "i5-12600K", price: 3560, img: "/assets/img/productos/cpu1.jpg" },
      { name: "Ryzen 7 7800X3D", price: 7799, img: "/assets/img/productos/cpu2.jpg" }
    ],
    gpu: [
      { name: "RTX 4060", price: 6250, img: "/assets/img/productos/gpu1.jpg" },
      { name: "RTX 5070", price: 16490, img: "/assets/img/productos/gpu2.jpg" }
    ],
    ram: [
      { name: "16GB DDR4", price: 1100, img: "/assets/img/productos/ram1.jpg" },
      { name: "32GB DDR4", price: 2600, img: "/assets/img/productos/ram2.jpg" }
    ],
    storage: [
      { name: "1TB HDD", price: 260, img: "/assets/img/productos/hdd1.jpg" },
      { name: "1TB SSD", price: 1560, img: "/assets/img/productos/ssd1.jpg" }
    ],
    psu: [
      { name: "650W 80+ Bronze", price: 450, img: "/assets/img/productos/psu1.jpg" },
      { name: "850W 80+ Gold", price: 2480, img: "/assets/img/productos/psu2.jpg" }
    ]
  };

  // Estado de la build
  const build = {
    motherboard: null,
    cpu: null,
    gpu: null,
    ram: null,
    storage: null,
    psu: null
  };

  // Orden de selección del usuario
  const selectionOrder = [];

  // Estado de validación
  let buildValidated = false;

  // Selectores del DOM
  const modal = document.getElementById("component-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalOptions = document.getElementById("modal-options");
  const modalClose = document.querySelector(".modal-close");
  const startBtn = document.querySelector(".start-setup-btn");
  const summaryContainer = document.querySelector(".build-summary-elements");
  const priceSpan = document.getElementById("price");
  const pcImageContainer = document.getElementById("pc-image");
  const addToCartBtn = document.querySelector(".carrt-btn-page");

  // Botón carrito bloqueado al inicio
  if (addToCartBtn) {
    addToCartBtn.disabled = true;
    addToCartBtn.classList.add("disabled-cart-btn");
  }

  if (!modal || !modalTitle || !modalOptions) {
    console.error("Error: modal no encontrado");
    return;
  }

  // UI 
  function updateSummary() {
    const map = {
      motherboard: "mb-result",
      cpu: "cpu-result",
      gpu: "gpu-result",
      ram: "ram-result",
      storage: "storage-result",
      psu: "psu-result"
    };

    Object.keys(map).forEach(type => {
      const el = document.getElementById(map[type]);
      if (el) el.textContent = build[type] ? build[type].name : "No seleccionado";
    });
  }

  function updateImages() {
    if (!pcImageContainer) return;
    pcImageContainer.innerHTML = "";

    selectionOrder.forEach(type => {
      const component = build[type];
      if (component) {
        const img = document.createElement("img");
        img.src = component.img;
        img.alt = component.name;
        img.style.height = "100px";
        img.style.marginRight = "10px";
        img.style.flexShrink = "0";
        pcImageContainer.appendChild(img);
      }
    });

    setTimeout(() => {
      pcImageContainer.scrollTo({
        left: pcImageContainer.scrollWidth,
        behavior: "smooth"
      });
    }, 50);
  }

  function updateTotalPrice() {
    const total = Object.values(build).reduce((s, c) => s + (c?.price || 0), 0);
    if (priceSpan) priceSpan.innerHTML = `<strong>$${total}</strong>`;
  }

  function updateTypeButton(type) {
    document.querySelectorAll(".component-selection-element").forEach(el => {
      if (el.dataset.type === type) {
        const btn = el.querySelector(".selection-elements-btn");
        if (btn) build[type] ? btn.classList.add("selected-selection-elements-btn")
                             : btn.classList.remove("selected-selection-elements-btn");
      }
    });
  }

  function showCompatibilityMessage() {
    if (!summaryContainer || document.getElementById("compatibility-msg")) return;
    const msg = document.createElement("p");
    msg.id = "compatibility-msg";
    msg.textContent = "✔ Configuración compatible";
    summaryContainer.appendChild(msg);
  }

  function removeCompatibilityMessage() {
    document.getElementById("compatibility-msg")?.remove();
  }

  function validateBuild() {
    return Object.values(build).every(v => v !== null);
  }

  // MODAL

  function openModalFor(type, name) {
    modalTitle.textContent = `Seleccione ${name}`;
    modalOptions.innerHTML = "";

    (components[type] || []).forEach(comp => {
      const option = document.createElement("div");
      option.className = "option";
      option.innerHTML = `
        <img src="${comp.img}">
        <p>${comp.name}</p>
        <p>$${comp.price}</p>
      `;

      if (build[type] && build[type].name === comp.name) {
        option.classList.add("modal-option-selected");
      }


      option.addEventListener("click", () => {
        if (build[type] && build[type].name === comp.name) {
          // Deseleccionar
          build[type] = null;
          const i = selectionOrder.indexOf(type);
          if (i !== -1) selectionOrder.splice(i, 1);
        } else {
          // Seleccionar
          build[type] = comp;
          const i = selectionOrder.indexOf(type);
          if (i !== -1) selectionOrder.splice(i, 1);
          selectionOrder.push(type);
        }

        updateSummary();
        updateImages();
        updateTotalPrice();
        updateTypeButton(type);
        removeCompatibilityMessage();

        // Invalida la build
        buildValidated = false;
        if (addToCartBtn) {
          addToCartBtn.disabled = true;
          addToCartBtn.classList.add("disabled-cart-btn");
        }

        modal.style.display = "none";
      });

      modalOptions.appendChild(option);
    });

    modal.style.display = "flex";
  }

  modalClose && modalClose.addEventListener("click", () => modal.style.display = "none");
  window.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });

  document.querySelectorAll(".component-selection-element").forEach(el => {
    el.addEventListener("click", () => openModalFor(el.dataset.type, el.dataset.name));
  });

  // CALCULAR CONFIGURACIÓN
  startBtn && startBtn.addEventListener("click", () => {
    if (!validateBuild()) {
      alert("⚠️ Debes seleccionar todos los componentes antes de continuar.");
      return;
    }

    updateTotalPrice();
    showCompatibilityMessage();

    buildValidated = true;
    if (addToCartBtn) {
      addToCartBtn.disabled = false;
      addToCartBtn.classList.remove("disabled-cart-btn");
    }

    const target = document.querySelector(".build-summary");
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  });

  // AÑADIR PC ARMADA AL CARRITO
  function addBuildToCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const specs = Object.values(build).map(c => c.name).join(", ");
    const total = Object.values(build).reduce((s, c) => s + c.price, 0);

    const pcImages = [
      "/assets/img/PCs/pc-1.jpg",
      "/assets/img/PCs/pc-2.jpg",
      "/assets/img/PCs/pc-3.jpg",
      "/assets/img/PCs/pc-4.jpg",
      "/assets/img/PCs/pc-5.jpg"
    ];

    cart.push({
      name: "PC Personalizada",
      price: total,
      img: pcImages[Math.floor(Math.random() * pcImages.length)],
      specs
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "/pages/07-carrito/index.html";
  }

  addToCartBtn && addToCartBtn.addEventListener("click", () => {
    if (!buildValidated) {
      alert("⚠️ Primero debes calcular la configuración.");
      return;
    }

    if (confirm("¿Deseas añadir esta configuración al carrito?")) {
      addBuildToCart();
    }
  });
});
