'use strict'

// Importar la excepción lógica desde el paquete de excepciones genéricas de AdonisJS
const { LogicalException } = require('@adonisjs/generic-exceptions')

// Definir una clase para la excepción de recurso no encontrado que extiende de LogicalException
class RecursoNoEncontradoException extends LogicalException {
  /**
   * Manejar esta excepción por sí misma
   * @param {*} error - El error que se produjo
   * @param {*} ctx - El contexto de la solicitud y la respuesta
   */
  handle (error, { response }) {
    // Responder con un estado de 404 (No encontrado) y un mensaje de error
    return response.status(404).json({
      error: 'El recurso no existe'
    });
  }
}

// Exportar la clase RecursoNoEncontradoException para su uso en otras partes de la aplicación
module.exports = RecursoNoEncontradoException
