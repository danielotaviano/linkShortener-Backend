const CreateShortLinkController = require('../../presentation/controllers/create-a-short-link-controller')
const urlValidatorAdapter = require('../../infra/validators/url-validator-adapter')
const UrlValidation = require('../../utils/validators/url-validation')
const SlugGeneration = require('../../utils/generators/slug-generation')
const slugGeneratorAdapter = require('../../infra/generators/slug-generator-adapter')
const AddLink = require('../../domain/usecases/add-link')
const linkRepository = require('../../infra/db/mongoose/link-repository')

module.exports = () => {
  const urlValidation = UrlValidation(urlValidatorAdapter)
  const slugGeneration = SlugGeneration(slugGeneratorAdapter)
  const addLink = AddLink(linkRepository())
  const createShortLinkController = CreateShortLinkController(urlValidation, slugGeneration, addLink)
  return createShortLinkController
}
