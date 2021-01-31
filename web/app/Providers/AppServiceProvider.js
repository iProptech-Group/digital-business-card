'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const UserRepository = use('Digital/User/Repository')

class AppServiceProvider extends ServiceProvider {

  register () {

    this.app.singleton('User/Repository', () => {
      const params = 'hungdeptrai'
      return new UserRepository(params, this.app.use('Database'))
    })

  }

  boot () {

  }
}

module.exports = AppServiceProvider
