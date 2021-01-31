'use strict'

const Database = use('Database')
const UserRepository = use('UserRepository')

class ProfileController {
  async create ({ request, UserRepository }) {
    try {
      // const usersData = request.collect('full-name', 'email', 'phone', 'facebook', 'instagram')
      return UserRepository
    } catch (err) {
      return err
    }
  }
}

module.exports = ProfileController
