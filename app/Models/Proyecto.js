'use strict'

/** Importar la clase Model de Lucid para definir el modelo */
const Model = use('Model')

/** Definir la clase Proyecto que extiende de Model */
class Proyecto extends Model {
  /** Definir la relación "user" donde un proyecto pertenece a un usuario */
  user () {
    return this.belongsTo('App/Models/User')
  }

  /** Definir la relación "tareas" donde un proyecto tiene muchas tareas */
  tareas () {
    return this.hasMany('App/Models/Tarea')
  }

}

/** Exportar la clase Proyecto para su uso en otras partes de la aplicación */
module.exports = Proyecto
