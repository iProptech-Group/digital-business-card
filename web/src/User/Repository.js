'use strict'

/**
 * @class Repository
 */
class Repository {

  /**
   *
   * @param connection
   */
  constructor (connection) {
    this.connection = connection
    this.tableName = 'users'
  }

  /**
   *
   * @param data
   * @return {void}
   */
  create (data) {
    return this.connection.table(this.tableName).insert(data)
  }

  /**
   *
   * @return {array}
   */
  getAll () {
    return this.connection.select('*').from(this.tableName)
  }

  /**
   *
   * @param userName
   * @return {string}
   */
  update (userName) {
    return userName
  }

  /**
   *
   * @param userName
   * @return {string}
   */
  find (userName) {
    return userName
  }
}

module.exports = Repository
