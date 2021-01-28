const LinkModel = require('./models/link')

module.exports = function () {
  const add = async (dataLink) => {
    const link = await LinkModel.create(dataLink)
    return link
  }

  const findBySlug = async (slug) => {
    const link = await LinkModel.findOne({ slug })
    return link
  }

  return {
    add,
    findBySlug
  }
}
