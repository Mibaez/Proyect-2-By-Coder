console.log("La página ha cargado completamente.");

// Simular datos de inicio de sesión
const usuariosValidos = ['mibaez@arcor.com', 'otrousuario@email.com'];
const contrasenasValidas = ['12345', 'abcde'];

// Función para manejar el inicio de sesión
const handleLogin = () => {
    let intentos = 3; // Número máximo de intentos de inicio de sesión
    let autenticado = false;

    while (intentos > 0 && !autenticado) {
        const username = prompt('Por favor, introduce tu nombre de usuario:');
        if (username === null) {
            console.log('El usuario ha cancelado el inicio de sesión.');
            alert('Inicio de sesión cancelado por el usuario.');
            return;
        }

        const password = prompt('Por favor, introduce tu contraseña:');
        if (password === null) {
            console.log('El usuario ha cancelado el inicio de sesión.');
            alert('Inicio de sesión cancelado por el usuario.');
            return;
        }

        if (usuariosValidos.includes(username) && contrasenasValidas.includes(password)) {
            console.log('Inicio de sesión exitoso para el usuario:', username);
            alert('¡Inicio de sesión exitoso! Redirigiendo al usuario a la página principal.');
            // Simular redireccionamiento del usuario
            window.location.href = "../index.html";
            autenticado = true;
        } else {
            console.log('Inicio de sesión fallido para el usuario:', username);
            alert('Usuario o contraseña incorrectos. Intentos restantes: ' + (intentos - 1));
            intentos--;
        }
    }

    if (!autenticado) {
        console.log('Número máximo de intentos de inicio de sesión alcanzado.');
        alert('Número máximo de intentos de inicio de sesión alcanzado. Por favor, inténtalo de nuevo más tarde.');
    }
};

// Simular el inicio de sesión al cargar completamente la página
setTimeout(() => {
    handleLogin();
}, 1000); // Simular un retraso para que el usuario tenga tiempo de ver la página antes de que aparezcan los cuadros de diálogo





