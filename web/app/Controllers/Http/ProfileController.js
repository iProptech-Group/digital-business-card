'use strict'

const Database = use('Database')

class ProfileController {

  /**
   *
   * @returns {Promise<*[]|*>}
   */
  async index () {
    try {
      return []
    } catch (e) {
      return e
    }
  }

  /**
   *
   * @returns {Promise<*[]|*>}
   */
  async store () {
    try {
      // const usersData = request.collect('full-name', 'email', 'phone', 'facebook', 'instagram')
      return []
    } catch (err) {
      return err
    }
  }
}

module.exports = ProfileController
