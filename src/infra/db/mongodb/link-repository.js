const LinkModel = require('./models/link')

module.exports = function () {
  const add = async (dataLink) => {
    const link = await LinkModel.create(dataLink)
    return link
  }

  return {
    add
  }
}
