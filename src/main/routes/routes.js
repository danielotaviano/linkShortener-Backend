const { Router } = require('express')
const makeCreateShortLinkController = require('../factories/create-short-link-controller-factory')
const routerAdapt = require('../adapter/express-router-adapter')

const routes = Router()

routes.post('/', routerAdapt(makeCreateShortLinkController()))

// routes.get('/:slug', LinkController.redirect)
module.exports = routes
