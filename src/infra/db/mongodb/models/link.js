const mongoose = require('mongoose')

const { Schema } = mongoose

const linkSchema = new Schema({
  url: String,
  slug: String,
  date: Date
})

module.exports = mongoose.model('Link', linkSchema)
