'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const { UserRepository } = require('./../src/User/UserRepository')

class AppServiceProvider extends ServiceProvider {

  register () {

    this.app.singleton('userRepository', () => {
      new UserRepository()
    })

  }
}

module.exports = AppServiceProvider
