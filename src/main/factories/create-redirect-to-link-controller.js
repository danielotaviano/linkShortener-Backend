const RedirectToLinkController = require('../../presentation/controllers/redirect-to-link-controller')
const FindLinkBySlug = require('../../domain/usecases/find-link-by-slug')
const linkRepository = require('../../infra/db/mongoose/link-repository')

module.exports = () => {
  const findLinkBySlug = FindLinkBySlug(linkRepository())
  const redirectToLinkController = RedirectToLinkController(findLinkBySlug)
  return redirectToLinkController
}
