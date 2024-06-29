'use strict'

/** Importar la clase Model de Lucid para definir el modelo */
const Model = use('Model')

/** Definir la clase Tarea que extiende de Model */
class Tarea extends Model {
  /**
   * Definir la relación "proyecto" donde una tarea pertenece a un proyecto
   * @return {Object} - La relación belongsTo con el modelo Proyecto
   */
  proyecto() {
    return this.belongsTo('App/Models/Proyecto')
  }
}

/** Exportar la clase Tarea para su uso en otras partes de la aplicación */
module.exports = Tarea
