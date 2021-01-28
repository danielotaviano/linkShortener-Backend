const { customAlphabet } = require('nanoid')

module.exports = (url) => {
  const alphabet = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789'
  const nanoid = customAlphabet(alphabet, 5)
  return nanoid()
}
