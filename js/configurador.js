const pcImageContainer = document.getElementById('pc-image');
const img = document.createElement('img');

img.src = "/assets/img/pcs/pc-1.jpeg";

img.style.height = "100%";
img.style.maxHeight = "100px";

img.style.width = "100%";
img.style.maxWidth = "100px";

img.style.borderRadius = "10px";

pcImageContainer.appendChild(img);
