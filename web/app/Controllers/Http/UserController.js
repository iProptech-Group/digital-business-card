'use strict'

class UserController {
  async show() {
    try {
      const users = await Database.table('user')
      return users
    }
    catch(err) {
      return err
    }
  }
}

module.exports = UserController
