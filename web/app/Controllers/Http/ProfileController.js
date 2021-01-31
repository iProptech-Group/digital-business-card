'use strict'

const Database = use('Database')

class ProfileController {
  async create ({ request }) {
    try {
      // const usersData = request.collect('full-name', 'email', 'phone', 'facebook', 'instagram')
      return []
    } catch (err) {
      return err
    }
  }
}

module.exports = ProfileController
