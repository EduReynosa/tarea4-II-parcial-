'use strict'

// Importar la excepción lógica desde el paquete de excepciones genéricas de AdonisJS
const { LogicalException } = require('@adonisjs/generic-exceptions')

// Definir una clase para la excepción de acceso prohibido que extiende de LogicalException
class AccesoProhibidoException extends LogicalException {
  /**
   * Manejar esta excepción de acceso prohibido
   * @param {*} error - El error que se produjo
   * @param {*} ctx - El contexto de la solicitud y la respuesta
   */
  handle(error, { response }) {
    // Responder con un estado 403 (Acceso Prohibido) y un mensaje de error
    return response.status(403).json({
      error: 'Acceso no permitido al recurso'
    });
  }
}

// Exportar la clase AccesoProhibidoException para su uso en otras partes de la aplicación
module.exports = AccesoProhibidoException
