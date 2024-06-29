'use strict'

// Importar el modelo de Proyecto
const Proyecto = use('App/Models/Proyecto');
// Importar el servicio de autorización
const AutorizacionService = use('App/Services/AutorizacionService');

class ProyectoController {
  // Método para obtener todos los proyectos de un usuario autenticado
  async index({ auth }) {
    // Obtener el usuario autenticado
    const user = await auth.getUser();
    // Retornar todos los proyectos asociados al usuario
    return await user.proyectos().fetch();
  }

  // Método para crear un nuevo proyecto
  async create({ auth, request }) {
    // Obtener el usuario autenticado
    const user = await auth.getUser();
    // Obtener el nombre del proyecto desde la solicitud
    const { nombre } = request.all();
    // Crear una nueva instancia del modelo Proyecto
    const proyecto = new Proyecto();
    // Asignar los datos proporcionados al proyecto
    proyecto.fill({ nombre });
    // Guardar el proyecto asociado al usuario autenticado
    await user.proyectos().save(proyecto);
    // Retornar el proyecto creado
    return proyecto;
  }

  // Método para eliminar un proyecto existente
  async destroy({ auth, params }) {
    // Obtener el usuario autenticado
    const user = await auth.getUser();
    // Obtener el ID del proyecto desde los parámetros de la solicitud
    const { id } = params;
    // Buscar el proyecto por su ID
    const proyecto = await Proyecto.find(id);
    // Verificar si el usuario tiene permisos para eliminar el proyecto
    AutorizacionService.verificarPermiso(proyecto, user);
    // Eliminar el proyecto
    await proyecto.delete();
    // Retornar el proyecto eliminado
    return proyecto;
  }

  // Método para actualizar un proyecto existente
  async update({ auth, params, request }) {
    // Obtener el usuario autenticado
    const user = await auth.getUser();
    // Obtener el ID del proyecto desde los parámetros de la solicitud
    const { id } = params;
    // Buscar el proyecto por su ID
    const proyecto = await Proyecto.find(id);
    // Verificar si el usuario tiene permisos para actualizar el proyecto
    AutorizacionService.verificarPermiso(proyecto, user);
    // Actualizar los datos del proyecto con los proporcionados en la solicitud
    proyecto.merge(request.only('nombre'));
    // Guardar los cambios realizados en el proyecto
    await proyecto.save();
    // Retornar el proyecto actualizado
    return proyecto;
  }
}

module.exports = ProyectoController
