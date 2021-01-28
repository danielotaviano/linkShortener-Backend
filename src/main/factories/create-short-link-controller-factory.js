const CreateShortLinkController = require('../../presentation/controllers/create-a-short-link-controller')
const urlValidatorAdapter = require('../../infra/validators/url-validator-adapter')
const UrlValidation = require('../../utils/validators/url-validation')
const SlugGeneration = require('../../utils/generators/slug-generation')
const slugGeneratorAdapter = require('../../infra/generators/slug-generator-adapter')
const AddLink = require('../../domain/usecases/add-link')
const FindLinkBySlug = require('../../domain/usecases/find-link-by-slug')
const linkRepository = require('../../infra/db/mongoose/link-repository')
const UrlFormatter = require('../../utils/formatter/url-formmater')
const urlFormatterAdapter = require('../../infra/formatter/url-formatter-adapter')

module.exports = () => {
  const urlValidation = UrlValidation(urlValidatorAdapter)
  const slugGeneration = SlugGeneration(slugGeneratorAdapter)
  const findLinkBySlug = FindLinkBySlug(linkRepository())
  const addLink = AddLink(linkRepository())
  const urlFormatter = UrlFormatter(urlFormatterAdapter)
  const createShortLinkController = CreateShortLinkController(urlValidation, slugGeneration, addLink, findLinkBySlug, urlFormatter)
  return createShortLinkController
}
