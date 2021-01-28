const { ServerError } = require('../err/app-error')

module.badRequest = (error) => ({
  statusCode: 400,
  body: error
})

module.ok = (data) => ({
  statusCode: 200,
  body: data
})

module.serverError = (error) => ({
  statusCode: 500,
  body: ServerError(error.stack)
})
