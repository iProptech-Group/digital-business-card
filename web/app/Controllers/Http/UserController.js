'use strict'

class UserController {
  index ({ request, response }) {
      return view.render('hello-world')
  }
}

module.exports = UserController
