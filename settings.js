module.exports = {
    // Usa el puerto que Railway asigne (o el 1880 por defecto)
    uiPort: process.env.PORT || 1880,

    // Configuración básica de autenticación para el panel de administración
    adminAuth: {
        type: "credentials",
        users: [{
            username: process.env.NODE_RED_USERNAME || "admin",
            // La contraseña debe estar hasheada; si usas una contraseña en texto plano, genera su hash
            password: process.env.NODE_RED_PASSWORD || "$2b$08$e0NRfjWvyULS64PeF/D50OWUdbdJf5QpJJ6uyMjvTtKq8EEhSe36W",
            permissions: "*"
        }]
    },

    // Otros ajustes personalizados pueden agregarse aquí si es necesario
};
