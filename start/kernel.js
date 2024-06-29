'use strict'

/** @type {import('@adonisjs/framework/src/Server')} */
const Server = use('Server')

// Middleware globales que se ejecutan en cada solicitud HTTP cuando coinciden las rutas
const globalMiddleware = [
  'Adonis/Middleware/BodyParser',
  'App/Middleware/ConvertEmptyStringsToNull'
]

// Middleware nombrados definidos como un objeto clave/valor para añadir condicionalmente middleware a rutas específicas o grupos de rutas
const namedMiddleware = {
  auth: 'Adonis/Middleware/Auth',
  guest: 'Adonis/Middleware/AllowGuestOnly'
}

// Middleware a nivel de servidor que se ejecutan incluso cuando no hay una ruta registrada para una URL dada
const serverMiddleware = [
  // 'Adonis/Middleware/Static', // Descomentar para servir activos estáticos
  'Adonis/Middleware/Cors'
]

Server
  .registerGlobal(globalMiddleware)
  .registerNamed(namedMiddleware)
  .use(serverMiddleware)
