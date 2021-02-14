'use strict'

/**
 *
 * @type {string}
 */
const mysqlDB = 'mysql'

/**
 *
 * @type {string}
 */
const tableName = 'users'

/**
 * @class Model
 */
class Model {
  /**
   *
   * @param dbManager
   */
  constructor (dbManager) {
    this.dbManager = dbManager
  }
  /**
   *
   * @returns {*}
   * @private
   */
  _getConnection () {
    return this.dbManager.connection(mysqlDB)
  }

  /**
   *
   * @param rawQuery
   * @returns {*}
   * @private
   */
  _query(rawQuery){
    return this._getConnection().raw(rawQuery)
  }

  /**
   *
   * @returns {*}
   */
  all () {
    return this._getConnection().select('*').from(tableName)
  }

  /**
   *
   * @param data
   * @returns {*}
   */
  insert(data) {
    return this._getConnection().table(tableName).insert(data)
  }

  /**
   *
   * @param condition
   * @returns {*}
   */
  find(condition) {
    let rawQuery = 'select * from ${tableName} where ${condition}'
    return this._query(rawQuery)
  }
}

module.exports = Model
