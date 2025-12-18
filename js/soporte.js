document.addEventListener('DOMContentLoaded', () => {
    // Selectores
    const input = document.getElementById('mensajeInput'); // Input de chat
    const chatBody = document.getElementById('chatBody'); // Contenedor de mensajes

    // Función para enviar mensaje
    const enviarMensaje = () => {
        const texto = input.value.trim();
        if (!texto) return; // No enviar mensajes vacíos

        // Crear mensaje del usuario
        const msgUsuario = document.createElement('div');
        msgUsuario.className = 'chat-mensaje usuario';
        msgUsuario.textContent = texto;
        chatBody.appendChild(msgUsuario);

        // Limpiar input
        input.value = '';

        // Scroll al final
        chatBody.scrollTop = chatBody.scrollHeight;

        // Respuesta automática del agente
        setTimeout(() => {
            const msgAgente = document.createElement('div');
            msgAgente.className = 'chat-mensaje agente';
            msgAgente.textContent = '¡Gracias por tu mensaje! En breve un agente te atenderá.';
            chatBody.appendChild(msgAgente);

            // Scroll al final
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);
    };

    // Enviar mensaje al presionar Enter
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            enviarMensaje();
        }
    });
});
