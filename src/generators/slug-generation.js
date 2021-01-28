module.exports = function (slugGenerator) {
  this.slugGenerator = slugGenerator

  return function (url) {
    return this.slugGenerator()
  }
}
