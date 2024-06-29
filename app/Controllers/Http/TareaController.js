'use strict'

// Importar los modelos de Proyecto y Tarea
const Proyecto = use('App/Models/Proyecto');
const Tarea = use('App/Models/Tarea');
// Importar el servicio de autorización
const AutorizacionService = use('App/Services/AutorizacionService');

class TareaController {
  // Método para obtener todas las tareas de un proyecto específico
  async index({ auth, request, params }) {
    // Obtener el usuario autenticado
    const user = await auth.getUser();
    // Obtener el ID del proyecto desde los parámetros de la solicitud
    const { id } = params;
    // Buscar el proyecto por su ID
    const proyecto = await Proyecto.find(id);
    // Verificar si el usuario tiene permisos para acceder al proyecto
    AutorizacionService.verificarPermiso(proyecto, user);
    // Retornar todas las tareas asociadas al proyecto
    return await proyecto.tareas().fetch();
  }

  // Método para crear una nueva tarea en un proyecto específico
  async create({ auth, request, params }) {
    // Obtener el usuario autenticado
    const user = await auth.getUser();
    // Obtener la descripción de la tarea desde la solicitud
    const { descripcion } = request.all();
    // Obtener el ID del proyecto desde los parámetros de la solicitud
    const { id } = params;
    // Buscar el proyecto por su ID
    const proyecto = await Proyecto.find(id);
    // Verificar si el usuario tiene permisos para acceder al proyecto
    AutorizacionService.verificarPermiso(proyecto, user);
    // Crear una nueva instancia del modelo Tarea
    const tarea = new Tarea();
    // Asignar los datos proporcionados a la tarea
    tarea.fill({ descripcion });
    // Guardar la tarea asociada al proyecto
    await proyecto.tareas().save(tarea);
    // Retornar la tarea creada
    return tarea;
  }

  // Método para actualizar una tarea existente
  async update({ auth, params, request }) {
    // Obtener el usuario autenticado
    const user = await auth.getUser();
    // Obtener el ID de la tarea desde los parámetros de la solicitud
    const { id } = params;
    // Buscar la tarea por su ID
    const tarea = await Tarea.find(id);
    // Obtener el proyecto al que pertenece la tarea
    const proyecto = await tarea.proyecto().fetch();
    // Verificar si el usuario tiene permisos para acceder al proyecto
    AutorizacionService.verificarPermiso(proyecto, user);
    // Actualizar los datos de la tarea con los proporcionados en la solicitud
    tarea.merge(request.only(['descripcion', 'completada']));
    // Guardar los cambios realizados en la tarea
    await tarea.save();
    // Retornar la tarea actualizada
    return tarea;
  }

  // Método para eliminar una tarea existente
  async destroy({ auth, params }) {
    // Obtener el usuario autenticado
    const user = await auth.getUser();
    // Obtener el ID de la tarea desde los parámetros de la solicitud
    const { id } = params;
    // Buscar la tarea por su ID
    const tarea = await Tarea.find(id);
    // Obtener el proyecto al que pertenece la tarea
    const proyecto = await tarea.proyecto().fetch();
    // Verificar si el usuario tiene permisos para acceder al proyecto
    AutorizacionService.verificarPermiso(proyecto, user);
    // Eliminar la tarea
    await tarea.delete();
    // Retornar la tarea eliminada
    return tarea;
  }
}

module.exports = TareaController
