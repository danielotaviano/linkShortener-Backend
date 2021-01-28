module.exports = function (addLinkRepository) {
  this.addLinkRepository = addLinkRepository
  return async function (dataLink) {
    const link = await this.addLinkRepository.add(dataLink)
    return link
  }
}
