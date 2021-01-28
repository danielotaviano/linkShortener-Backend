const appError = (name, message) => {
  this.message = message
  this.name = name
  return this
}

const ServerError = (stack) => {
  this.message = 'Internal server error'
  this.name = 'ServerError'
  this.stack = stack
  return this
}

module.exports = {
  appError, ServerError
}
