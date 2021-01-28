const { appError } = require('../err/app-error')
const { badRequest, redirect } = require('../helper/http-helper')

module.exports = (findLinkBySlug) => {
  this.findLinkBySlug = findLinkBySlug
  return async function (httpRequest) {
    const { slug } = httpRequest.params

    const link = await this.findLinkBySlug(slug)
    if (!link) {
      return badRequest(appError('Invalid Param Error', 'This slug is not associated with any url '))
    }
    return redirect(link.url)
  }
}
