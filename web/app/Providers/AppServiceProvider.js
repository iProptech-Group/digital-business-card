'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const UserRepository = use('Digital/User/Repository')

class AppServiceProvider extends ServiceProvider {

  register () {

    this.app.singleton('User/Repository', () => {
      return new UserRepository('hungdeptrai', this.app.use('Database'))
    })

  }

  boot () {
    // const UserRepository = use('User/Repository')
    // UserRepository.set('hung')
    // return console.log(UserRepository.getNewItemSecond())
  }
}

module.exports = AppServiceProvider
