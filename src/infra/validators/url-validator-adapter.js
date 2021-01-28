const validator = require('validator').default

module.exports = (url) => {
  return validator.isURL(url)
}
