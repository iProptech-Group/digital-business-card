'use strict'

const Factory = use('Factory')

Factory.blueprint('App/Models/User', async (faker) => {
  return {
    username: faker.username(),
    password: await Hash.make(faker.password())
  }
})
