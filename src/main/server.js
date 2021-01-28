require('dotenv/config')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  require('./config/app').listen(3000, () => {
    console.log('Server is running at port :3000')
  })
})
