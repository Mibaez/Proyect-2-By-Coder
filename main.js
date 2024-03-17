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
                // Credenciales correctas, redirigir al usuario a search.html
                window.location.href = './pages/search.html';
            } else {
                // Credenciales incorrectas, mostrar un mensaje de error
                alert('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
            }
        });
    }
});
