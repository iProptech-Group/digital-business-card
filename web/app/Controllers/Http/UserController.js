'use strict'

const UserRepository = use('User/Repository')

class UserController {
  /**
   *
   * @param response
   * @return {Promise<any>}
   */
  async index ({ response }) {
    try {
      return await UserRepository.getAll()
    } catch (e) {
      return response.status(400).send(e)
    }
  }

  /**
   *
   * @param response
   * @return {Promise<any>}
   */
  async find ({ response }) {
    try {
      return await UserRepository.getAll()
    } catch (e) {
      return response.status(400).send(e)
    }
  }

  /**
   *
   * @param request
   * @param response
   * @return {Promise<*>}
   */
  async create ({ request, response }) {
    try {
      const data = request.only(['full-name', 'email', 'phone', 'facebook', 'instagram'])
      await UserRepository.create(data)
      return response.status(201).send('Submit Successfully')
    } catch (e) {
      return response.status(400).send(e)
    }
  }
}

module.exports = UserController
