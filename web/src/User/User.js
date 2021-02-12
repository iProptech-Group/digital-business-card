'use strict'

const { BaseModel } = use('Model')

/**
 * @class Model
 */
class Model extends BaseModel
{
  static get connection () {
    return 'mysql'
  }

  static get table () {
    return this.tableName
  }

  update(){
    Model.table
  }
}

module.exports = Model
