'use strict'

const { UserRepository } = use('User/Repository')

class UserController {
  async show (UserRepository) {
    try {
      return console.log(UserRepository.get())
    } catch (err) {
      return err
    }
  }
}

module.exports = UserController
