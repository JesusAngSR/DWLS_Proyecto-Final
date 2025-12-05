document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('mensajeInput');
    const chatBody = document.getElementById('chatBody');

    const enviarMensaje = () => {
        const texto = input.value.trim();
        if (!texto) return;

        // Mensaje del usuario
        const msgUsuario = document.createElement('div');
        msgUsuario.className = 'chat-mensaje usuario';
        msgUsuario.textContent = texto;
        chatBody.appendChild(msgUsuario);

        // Limpiar input
        input.value = '';

        chatBody.scrollTop = chatBody.scrollHeight;

        // Respuesta automática
        setTimeout(() => {
            const msgAgente = document.createElement('div');
            msgAgente.className = 'chat-mensaje agente';
            msgAgente.textContent = '¡Gracias por tu mensaje! En breve un agente te atenderá. 😊';
            chatBody.appendChild(msgAgente);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);
    };

    // Enviar con Enter
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            enviarMensaje();
        }
    });
});