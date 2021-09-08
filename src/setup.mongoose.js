const mongoose = require('mongoose')

const url = 'mongodb://root:12345@localhost:27017/obec?authSource=admin'
// const url = 'mongodb://localhost:27017/obec'
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(url, options)
mongoose.set('debug', true)

module.exports = mongoose