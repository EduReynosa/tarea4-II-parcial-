'use strict'

// Importar la clase Model de Lucid para definir el modelo de usuario
const Model = use('Model')

// Importar el módulo Hash para cifrar contraseñas
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    /**
     * Hook que se ejecuta antes de guardar un usuario en la base de datos.
     * Cifra la contraseña del usuario si ha sido modificada.
     * @param {Object} userInstance - La instancia del usuario que se está guardando
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  /**
   * Define la relación de un usuario con sus tokens.
   * @returns {Object} - La relación hasMany con el modelo Token
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }

  /**
   * Define la relación de un usuario con sus proyectos.
   * @returns {Object} - La relación hasMany con el modelo Proyecto
   */
  proyectos () {
    return this.hasMany('App/Models/Proyecto')
  }
}

// Exportar la clase User para su uso en otras partes de la aplicación
module.exports = User
