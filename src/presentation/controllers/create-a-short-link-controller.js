const { badRequest, ok, serverError } = require('../helper/http-helper')
const { appError } = require('../err/app-error')

module.exports = function (linkValidator, slugGenerator, addLink, findLinkBySlug) {
  this.linkValidation = linkValidator
  this.generateRandomSlug = slugGenerator
  this.addLink = addLink
  this.findLinkBySlug = findLinkBySlug

  return async function create (httpRequest) {
    try {
      let { slug, url } = httpRequest.body

      if (!url) {
        return badRequest(appError('Missing Param Error', 'Missing Param: Url'))
      }

      const isValidLink = this.linkValidation(url)
      if (!isValidLink) {
        return badRequest(appError('Invalid Param Error', 'Invalid Param: Link url is not a valid url'))
      }

      const findSlug = await this.findLinkBySlug(slug)

      if (findSlug) {
        return badRequest(appError('Invalid Slug Error', 'This slug is already in use '))
      }

      if (!slug) {
        slug = this.generateRandomSlug()
      }

      const createdLink = await this.addLink({ slug, url })

      return ok(createdLink)
    } catch (error) {
      return serverError(error)
    }
  }
}
