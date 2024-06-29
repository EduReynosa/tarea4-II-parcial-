'use strict'

// Importar el modelo de usuario
const User = use('App/Models/User');

class UserController {
  // Método para iniciar sesión
  async login({ request, auth }) {
    // Obtener el correo electrónico y la contraseña desde la solicitud
    const { email, password } = request.all();
    // Intentar autenticar al usuario con el correo electrónico y la contraseña proporcionados
    const token = await auth.attempt(email, password);
    // Retornar el token de autenticación
    return token;
  }

  // Método para registrar un nuevo usuario
  async store({ request }) {
    // Obtener el correo electrónico y la contraseña desde la solicitud
    const { email, password } = request.all();
    // Crear un nuevo usuario con los datos proporcionados
    const user = await User.create({
      email,
      password,
      username: email // Se utiliza el correo electrónico como nombre de usuario
    });
    // Iniciar sesión automáticamente después de registrar al usuario
    return this.login(...arguments);
  };
}

module.exports = UserController
