'use strict'

const UserRepository = use('User/Repository')

class UserController {
  async index (UserRepository) {
    try {
      UserRepository.set('hung')
      return console.log(UserRepository.getNewItem())
    } catch (err) {
      return err
    }
  }
}

module.exports = UserController
