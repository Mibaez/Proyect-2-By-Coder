console.log("La página ha cargado completamente.");

// Simular datos de inicio de sesión
const usuariosValidos = ['mibaez@arcor.com', 'otrousuario@email.com'];
const contrasenasValidas = ['12345', 'abcde'];

// Función para manejar el envío del formulario de inicio de sesión
const handleLoginFormSubmit = () => {
    // Simular entrada de usuario y contraseña utilizando cuadros de diálogo
    const username = prompt('Por favor, introduce tu nombre de usuario:');
    const password = prompt('Por favor, introduce tu contraseña:');

    // Verificar el usuario y contraseña
    if (usuariosValidos.includes(username) && contrasenasValidas.includes(password)) {
        console.log('Inicio de sesión exitoso para el usuario:', username);
        alert('¡Inicio de sesión exitoso! Redirigiendo al usuario a la página principal.');
        // Simular redireccionamiento del usuario
        window.location.href = "../index.html";
    } else {
        console.log('Inicio de sesión fallido para el usuario:', username);
        alert('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
    }
};

// Simular el envío del formulario al cargar completamente la página
setTimeout(() => {
    handleLoginFormSubmit();
}, 1000); // Simular un retraso para que el usuario tenga tiempo de ver la página antes de que aparezca el cuadro de diálogo






