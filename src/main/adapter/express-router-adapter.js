module.exports = function (controller) {
  this.controller = controller
  return async function (req, res) {
    const httpRequest = {
      body: req.body
    }
    const httpResponse = await controller(httpRequest)

    return res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
