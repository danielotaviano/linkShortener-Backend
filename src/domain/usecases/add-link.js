module.exports = function (addLinkRepository) {
  this.addLinkRepository = addLinkRepository
  return async function (dataLink) {
    const link = await this.addLinkRepository.add(Object.assign(dataLink, { date: new Date() }))
    return link
  }
}
