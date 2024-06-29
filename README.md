
# Aplicación API con AdonisJS

Este es el proyecto base para crear un servidor API con AdonisJs, que viene preconfigurado con:

1. Bodyparser (Analizador de cuerpos de las solicitudes)
2. Autenticación
3. CORS (Compartición de recursos entre orígenes)
4. Lucid ORM (Mapeo Objeto-Relacional)
5. Migraciones y semillas

## Configuración

Utiliza el comando de Adonis para instalar la plantilla:

```bash
adonis new yardstick --api-only
```

O clona el repositorio manualmente y luego ejecuta `npm install` para instalar las dependencias.

### Migraciones

Ejecuta el siguiente comando para ejecutar las migraciones iniciales:

```bash
adonis migration:run
```
```
