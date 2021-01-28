module.exports = function (urlValidator) {
  this.urlValidator = urlValidator

  return function (url) {
    return this.urlValidator(url)
  }
}
