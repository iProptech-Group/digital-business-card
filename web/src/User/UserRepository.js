'use strict'

class UserRepository {
  /**
   *
   * @param parameter
   */
  constructor () {
    this.parameter = 'hung'
  }

  /**
   *
   * @returns { string }
   */
  create () {
    return this.parameter
  }
}

module.exports = UserRepository
