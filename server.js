// Importa la clase Ignitor desde el paquete @adonisjs/ignitor
const { Ignitor } = require('@adonisjs/ignitor')

// Crea una nueva instancia de Ignitor, pasando la configuración del contenedor de dependencias de AdonisJS
new Ignitor(require('@adonisjs/fold'))
  // Establece el directorio raíz de la aplicación
  .appRoot(__dirname)
  // Inicia el servidor HTTP
  .fireHttpServer()
  // Captura y muestra cualquier error que ocurra durante el proceso de arranque
  .catch(console.error)

// Si la aplicación se inicia correctamente, se muestra un mensaje de éxito
