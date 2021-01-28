const { ServerError } = require('../err/app-error')
const badRequest = (error) => ({
  statusCode: 400,
  body: error
})

const ok = (data) => ({
  statusCode: 200,
  body: data
})

const serverError = (error) => ({
  statusCode: 500,
  body: ServerError(error.stack)
})

const redirect = (url) => ({
  statusCode: 301,
  urlTo: url
})
module.exports = {
  badRequest, ok, serverError, redirect
}
