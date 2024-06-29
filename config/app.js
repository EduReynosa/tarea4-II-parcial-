'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

module.exports = {

  /*
  |--------------------------------------------------------------------------
  | Nombre de la Aplicación
  |--------------------------------------------------------------------------
  |
  | Este valor es el nombre de tu aplicación y se puede usar cuando necesites
  | colocar el nombre de la aplicación en un correo electrónico, vista u
  | otra ubicación.
  |
  */

  name: Env.get('APP_NAME', 'AdonisJs'),

  /*
  |--------------------------------------------------------------------------
  | Clave de la Aplicación
  |--------------------------------------------------------------------------
  |
  | La clave de la aplicación es una cadena generada aleatoriamente de 16 o 32
  | caracteres de longitud necesaria para encriptar cookies, sesiones y otros
  | datos sensibles.
  |
  */
  appKey: Env.getOrFail('APP_KEY'),

  http: {
    /*
    |--------------------------------------------------------------------------
    | Permitir Suplantación de Métodos
    |--------------------------------------------------------------------------
    |
    | La suplantación de métodos permite hacer solicitudes suplantando el verbo
    | HTTP. Esto significa que puedes hacer una solicitud GET pero instruir al
    | servidor para que la trate como una solicitud POST o PUT. Si deseas esta
    | característica, establece el valor de abajo a true.
    |
    */
    allowMethodSpoofing: true,

    /*
    |--------------------------------------------------------------------------
    | Confiar en Proxy
    |--------------------------------------------------------------------------
    |
    | Confiar en el proxy define si se deben confiar o no en los encabezados
    | X-Forwarded-*. Cuando tu aplicación está detrás de un servidor proxy
    | como nginx, estos valores se configuran automáticamente y se debe confiar
    | en ellos. Además de establecerlo en true o false, Adonis soporta varias
    | maneras de permitir valores de proxy. Lee la documentación para más detalles.
    |
    */
    trustProxy: false,

    /*
    |--------------------------------------------------------------------------
    | Subdominios
    |--------------------------------------------------------------------------
    |
    | Desplazamiento a utilizar para devolver subdominios para una solicitud dada.
    | Para la mayoría de las aplicaciones será 2, a menos que tengas subdominios
    | anidados.
    | cheatsheet.adonisjs.com      - desplazamiento - 2
    | virk.cheatsheet.adonisjs.com - desplazamiento - 3
    |
    */
    subdomainOffset: 2,

    /*
    |--------------------------------------------------------------------------
    | Callback JSONP
    |--------------------------------------------------------------------------
    |
    | Callback JSONP por defecto a utilizar cuando falta la cadena de consulta
    | callback en la URL de la solicitud.
    |
    */
    jsonpCallback: 'callback',

    /*
    |--------------------------------------------------------------------------
    | Etag
    |--------------------------------------------------------------------------
    |
    | Establece etag en todas las respuestas HTTP. Para desactivar en rutas
    | seleccionadas, puedes llamar a `response.send` con un objeto de opciones
    | de la siguiente manera.
    |
    | response.send('Hello', { ignoreEtag: true })
    |
    */
    etag: false
  },

  views: {
    /*
    |--------------------------------------------------------------------------
    | Cache de Vistas
    |--------------------------------------------------------------------------
    |
    | Define si se debe o no almacenar en caché la vista compilada. Establece en
    | true en producción para optimizar el tiempo de carga de las vistas.
    |
    */
    cache: Env.get('CACHE_VIEWS', true)
  },

  static: {
    /*
    |--------------------------------------------------------------------------
    | Archivos Punto
    |--------------------------------------------------------------------------
    |
    | Define cómo tratar los archivos punto al intentar servir recursos estáticos.
    | Por defecto está configurado para ignorar, lo que hará que se pretenda que
    | los archivos punto no existen.
    |
    | Puede ser uno de los siguientes:
    | ignore, deny, allow
    |
    */
    dotfiles: 'ignore',

    /*
    |--------------------------------------------------------------------------
    | ETag
    |--------------------------------------------------------------------------
    |
    | Habilitar o deshabilitar la generación de etag
    |
    */
    etag: true,

    /*
    |--------------------------------------------------------------------------
    | Extensiones
    |--------------------------------------------------------------------------
    |
    | Establece retrocesos de extensión de archivo. Cuando se establece, si no se
    | encuentra un archivo, se agregarán las extensiones dadas al nombre del
    | archivo y se buscarán. La primera que exista será servida. Ejemplo: ['html', 'htm'].
    |
    */
    extensions: false
  },

  locales: {
    /*
    |--------------------------------------------------------------------------
    | Cargador
    |--------------------------------------------------------------------------
    |
    | El cargador a utilizar para obtener y actualizar locales. A continuación se
    | muestra la lista de opciones disponibles.
    |
    | file, database
    |
    */
    loader: 'file',

    /*
    |--------------------------------------------------------------------------
    | Localización Predeterminada
    |--------------------------------------------------------------------------
    |
    | Localización predeterminada a utilizar por el proveedor Antl. Siempre puedes
    | cambiar de controlador en tiempo de ejecución o usar el middleware oficial
    | de Antl para detectar el controlador basado en encabezados HTTP/cadena de
    | consulta.
    |
    */
    locale: 'en'
  },

  logger: {
    /*
    |--------------------------------------------------------------------------
    | Transporte
    |--------------------------------------------------------------------------
    |
    | Transporte a utilizar para registrar mensajes. Puedes tener múltiples
    | transportes utilizando el mismo controlador.
    |
    | Los controladores disponibles son: `file` y `console`.
    |
    */
    transport: 'console',

    /*
    |--------------------------------------------------------------------------
    | Transporte de Consola
    |--------------------------------------------------------------------------
    |
    | Utilizando el controlador `console` para registrar mensajes. Este controlador
    | escribe en `stdout` y `stderr`.
    |
    */
    console: {
      driver: 'console',
      name: 'adonis-app',
      level: 'info'
    },

    /*
    |--------------------------------------------------------------------------
    | Transporte de Archivos
    |--------------------------------------------------------------------------
    |
    | El transporte de archivos utiliza el controlador de archivos y escribe mensajes
    | de registro para un archivo dado dentro del directorio `tmp` de tu aplicación.
    |
    | Para un directorio diferente, establece una ruta absoluta para el nombre del archivo.
    |
    */
    file: {
      driver: 'file',
      name: 'adonis-app',
      filename: 'adonis.log',
      level: 'info'
    }
  },

  /*
  |--------------------------------------------------------------------------
  | Opciones Genéricas de Cookies
  |--------------------------------------------------------------------------
  |
  | Las siguientes opciones de cookies son configuraciones genéricas utilizadas por
  | AdonisJs para crear cookies. Sin embargo, algunas partes de la aplicación como
  | `sessions` pueden tener configuraciones separadas para cookies dentro de
  | `config/session.js`.
  |
  */
  cookie: {
    httpOnly: true,
    sameSite: false,
    path: '/',
    maxAge: 7200
  }
}
