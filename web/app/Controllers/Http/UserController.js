'use strict'

const Database = use('Database')

class UserController {
  async show(request) {
    try {
      // const users = await Database.connection('mysql').select('*').from('users')
      return request.csrfToken()
    }
    catch(err) {
      return err
    }
  }
}

module.exports = UserController
