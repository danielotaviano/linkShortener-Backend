const { addHttp } = require('httplus')

module.exports = function (url) {
  return addHttp(url)
}
