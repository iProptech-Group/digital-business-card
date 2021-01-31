'use strict'

const Database = use('Database')
const UserRepository = use('UserRepository')

class UserController {
  async show ({ UserRepository }) {
    try {
      // const users = await Database.connection('mysql').select('*').from('users')
      return UserRepository
    } catch (err) {
      return err
    }
  }
}

module.exports = UserController
