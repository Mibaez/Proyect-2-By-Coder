document.addEventListener('DOMContentLoaded', function() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const button = document.getElementById('button');

    if (username && password && button) {
        button.addEventListener('click' , (e) => {
            e.preventDefault();
            const data = {
                username: username.value,
                password: password.value
            };

            // Verificar las credenciales
            if (data.username === 'mibaez@arcor.com' && data.password === '12345') {
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
