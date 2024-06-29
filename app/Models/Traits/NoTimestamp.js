'use strict'

// Definir la clase NoTimestamp para deshabilitar las marcas de tiempo automáticas en un modelo
class NoTimestamp {
  /**
   * Método de registro para deshabilitar las columnas de marcas de tiempo
   * @param {object} Model - El modelo al que se le aplicará el comportamiento
   */
  register(Model) {
    Object.defineProperties(Model, {
      createdAtColumn: {
        // Definir el getter para que retorne null, deshabilitando la columna created_at
        get: () => null,
      },
      updatedAtColumn: {
        // Definir el getter para que retorne null, deshabilitando la columna updated_at
        get: () => null,
      }
    })
  }
}

// Exportar la clase NoTimestamp para su uso en otras partes de la aplicación
module.exports = NoTimestamp
