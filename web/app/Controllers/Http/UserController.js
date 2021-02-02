'use strict'

const UserRepository = use('User/Repository')

class UserController {
  async index () {
    try {
      const data = {
        'full-name': 'hung',
        email: 'phamphihungbk@gmail.com',
        phone: 1285532132,
        facebook: 'https://facebook',
        instagram: 'https://instagram'
      }
      UserRepository.create(data)
      return UserRepository.getAll()
    } catch (e) {
      return e
    }
  }

  async store () {
    try {} catch (e) {
      return e
    }
  }

}

module.exports = UserController
