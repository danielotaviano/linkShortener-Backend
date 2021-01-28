const { badRequest, serverError } = require('../helper/http-helper')
const { appError, ok } = require('../err/app-error')

module.exports = function (linkValidator, slugGenerator, addLink) {
  this.linkValidation = linkValidator
  this.generateRandomSlug = slugGenerator
  this.addLink = addLink

  return async function create (httpRequest) {
    try {
      let { slug, link } = httpRequest.body

      if (!link) {
        return badRequest(appError('Missing Param Error', 'Missing Param: Link'))
      }

      const isValidLink = this.linkValidation.isValid(link)
      if (!isValidLink) {
        return badRequest(appError('Invalid Param Error', 'Invalid Param: Link url is not a valid url'))
      }

      if (!slug) {
        slug = this.generateRandomSlug.generate()
      }

      const createdLink = await this.addLink.add(link)

      return ok(createdLink)
    } catch (error) {
      return serverError(error)
    }
  }
}
