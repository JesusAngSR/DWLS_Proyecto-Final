document.querySelectorAll('[include-html]').forEach(el => {
        fetch(el.getAttribute('include-html'))
                .then(response => response.text())
                .then(data => el.innerHTML = data);
        }
);
