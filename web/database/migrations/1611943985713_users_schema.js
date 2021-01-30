'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.create('users', (table) => {
      // table.increments()
      table.string('full-name', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.integer('phone', 254).notNullable().unique()
      table.string('facebook', 254).notNullable().unique()
      table.string('instagram', 254).notNullable().unique()
      // table.timestamps()
    })
  }

  down () {
    this.dropTableIfExists('users')
  }
}

module.exports = UsersSchema
