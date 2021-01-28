module.exports = function (urlFormatterAdapter) {
  this.urlFormatterAdapter = urlFormatterAdapter
  return function (url) {
    return this.urlFormatterAdapter(url)
  }
}
