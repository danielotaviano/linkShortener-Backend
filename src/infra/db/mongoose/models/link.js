const mongoose = require('mongoose')

const { Schema } = mongoose

const linkSchema = new Schema({
  url: String,
  slug: String,
  date: Date
}, { versionKey: false })

module.exports = mongoose.model('link', linkSchema)
