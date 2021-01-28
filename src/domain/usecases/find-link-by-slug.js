module.exports = function (findLinkBySlugRepository) {
  this.findLinkBySlugRepository = findLinkBySlugRepository
  return async function (slug) {
    const link = await this.addLinkRepository.findBySlug(slug)
    return link
  }
}
