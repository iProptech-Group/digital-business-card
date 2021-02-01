'use strict'

class Repository {
  /**
   *
   * @param params
   * @param database
   */
  constructor (params, database) {
    this.params = params
    this.database = database
  }

  /**
   *
   * @returns { string }
   */
  get () {
    return this.database.connection('mysql').select('*').from('users')
  }

  getNewItem () {
    return this.parades
  }

  getNewItemSecond () {
    return this.params
  }

  /**
   *
   * @param parades
   */
  set (parades) {
    this.parades = parades
  }

  storeUserData () {

  }

  getUserData () {

  }
}

module.exports = Repository
