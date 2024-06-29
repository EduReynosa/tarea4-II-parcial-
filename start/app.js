'use strict'

/*
|--------------------------------------------------------------------------
| Proveedores
|--------------------------------------------------------------------------
|
| Los proveedores son bloques de construcción para tu aplicación Adonis.
| Cada vez que instales un nuevo paquete específico de Adonis, lo más
| probable es que registres el proveedor aquí.
|
*/
const providers = [
  '@adonisjs/framework/providers/AppProvider',
  '@adonisjs/auth/providers/AuthProvider',
  '@adonisjs/bodyparser/providers/BodyParserProvider',
  '@adonisjs/cors/providers/CorsProvider',
  '@adonisjs/lucid/providers/LucidProvider'
]

/*
|--------------------------------------------------------------------------
| Proveedores de Ace
|--------------------------------------------------------------------------
|
| Los proveedores de Ace son necesarios solo cuando se ejecutan comandos
| de ace. Por ejemplo, proveedores para migraciones, pruebas, etc.
|
*/
const aceProviders = [
  '@adonisjs/lucid/providers/MigrationsProvider'
]

/*
|--------------------------------------------------------------------------
| Alias
|--------------------------------------------------------------------------
|
| Los alias son nombres cortos y únicos para las vinculaciones del contenedor
| de IoC. Eres libre de crear tus propios alias.
|
| Por ejemplo:
|   { Route: 'Adonis/Src/Route' }
|
*/
const aliases = {}

/*
|--------------------------------------------------------------------------
| Comandos
|--------------------------------------------------------------------------
|
| Aquí almacenas los comandos ace para tu paquete.
|
*/
const commands = []

module.exports = { providers, aceProviders, aliases, commands }
