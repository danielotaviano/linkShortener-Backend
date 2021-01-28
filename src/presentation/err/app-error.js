module.appError = (name, message) => {
  this.message = message
  this.name = name
  return this
}

module.ServerError = (stack) => {
  this.message = 'Internal server error'
  this.name = 'ServerError'
  this.stack = stack
  return this
}
