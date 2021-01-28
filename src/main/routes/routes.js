const { Router } = require('express')
const makeCreateShortLinkController = require('../factories/create-short-link-controller-factory')
const makeRedirectToLinkController = require('../factories/create-redirect-to-link-controller')
const routerAdapt = require('../adapter/express-router-adapter')

const routes = Router()

routes.post('/', routerAdapt(makeCreateShortLinkController()))

routes.get('/:slug', routerAdapt(makeRedirectToLinkController()))
module.exports = routes
