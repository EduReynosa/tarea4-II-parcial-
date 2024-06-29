'use strict'

// Definir una clase para el middleware que convierte cadenas vacías en nulos
class ConvertEmptyStringsToNull {
  // Método handle que procesa la solicitud
  async handle ({ request }, next) {
    // Verificar si el cuerpo de la solicitud contiene claves
    if (Object.keys(request.body).length) {
      // Iterar sobre las claves del cuerpo de la solicitud y asignar nulo a las cadenas vacías
      request.body = Object.assign(
        ...Object.keys(request.body).map(key => ({
          [key]: request.body[key] !== '' ? request.body[key] : null
        }))
      )
    }

    // Llamar al siguiente middleware en la cadena de middleware
    await next()
  }
}

// Exportar la clase ConvertEmptyStringsToNull para su uso en otras partes de la aplicación
module.exports = ConvertEmptyStringsToNull
