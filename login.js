document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Verificar el usuario y contraseña
        if (username === 'mibaez@arcor.com' && password === '12345') {
            // Inicio de sesión exitoso, redirigir al usuario a la página principal
            window.location.href ="./index.html"
        } else {
            // Mostrar un mensaje de error al usuario
            alert('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
        }
    });
});





