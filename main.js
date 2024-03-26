document.addEventListener('DOMContentLoaded', function() {
    // Declaración de variables
    let usernameInput = document.getElementById('username');
    let passwordInput = document.getElementById('password');
    let button = document.getElementById('button');

    // Declaración de un array
    const usuariosAutorizados = [
        { username: 'mibaez@arcor.com', password: '12345' },
        { username: 'usuario2@example.com', password: '54321' }
    ];

    if (usernameInput && passwordInput && button) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const data = {
                username: usernameInput.value,
                password: passwordInput.value
            };

            // Verificar las credenciales
            const usuarioValido = usuariosAutorizados.find(usuario => usuario.username === data.username && usuario.password === data.password);

            if (usuarioValido) {
                // Mostrar confirmación antes de redirigir
                const confirmation = confirm('¿Estás seguro de que deseas continuar?');
                
                if (confirmation) {
                    // Credenciales correctas, redirigir al usuario a search.html
                    window.location.href = './pages/search.html';
                    
                    // Agregar al historial de navegación
                    history.pushState(null, '', './pages/search.html');
                } else {
                    // El usuario canceló la acción
                    alert('Acción cancelada por el usuario.');
                }
            } else {
                // Credenciales incorrectas, mensaje de error
                alert('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
            }
        });
    }
});
