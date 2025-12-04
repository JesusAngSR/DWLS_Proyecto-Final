document.querySelectorAll('[include-html]').forEach(el => {
        fetch(el.getAttribute('include-html'))
                .then(response => response.text())
                .then(data => el.innerHTML = data);
        }
);
document.addEventListener("click", (e) => {
    if (e.target.matches("#login-btn")) {
        window.location.href = "/pages/05-login/index.html";
    }
});
