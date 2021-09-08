
const mongoose = require('./setup.mongoose')
const CustomerSchema = new mongoose.Schema({
  id: Number,
  name: String,
  surname: String,
  updateDate: Date
})

module.exports =  mongoose.model('customer', CustomerSchema)