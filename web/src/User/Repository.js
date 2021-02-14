'use strict'

const Model = use('Digital/User/Model')

/**
 * @class Repository
 */
class Repository {
  /**
   *
   * @param Database
   */
  constructor (Database) {
    this.model = new Model(Database)
  }

  /**
   *
   * @param data
   * @returns {*}
   */
  create (data) {
    return this.model.insert(data)
  }

  /**
   *
   * @return {array}
   */
  getAll () {
    return this.model.all()
  }

  /**
   *
   * @param email
   */
  findUser (email) {
    return this.model.find(this._prepareCondition(email))
  }

  /**
   *
   * @param condition
   * @private
   */
  _prepareCondition (condition) {
    return condition
  }
}

module.exports = Repository
