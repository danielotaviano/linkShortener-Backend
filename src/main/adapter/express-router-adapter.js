module.exports = function (controller) {
  this.controller = controller
  return async function (req, res) {
    const httpRequest = {
      body: req.body,
      params: req.params
    }
    const httpResponse = await controller(httpRequest)
    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      return res.status(httpResponse.statusCode).json(httpResponse.body)
    }

    if (httpResponse.statusCode === 301) {
      return res.redirect(httpResponse.statusCode, httpResponse.urlTo)
    }

    return res.status(httpResponse.statusCode).json({ error: httpResponse.body.message })
  }
}
