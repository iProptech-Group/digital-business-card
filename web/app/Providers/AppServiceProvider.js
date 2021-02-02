'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const UserRepository = use('Digital/User/Repository')

class AppServiceProvider extends ServiceProvider {

  register () {

    this.app.singleton('User/Repository', (app) => {
      return new UserRepository(app.use('Database').connection('mysql'))
    })

  }

  boot () {
  }
}

module.exports = AppServiceProvider
