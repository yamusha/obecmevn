
const mongoose = require('./setup.mongoose')
const bcrypt = require('bcrypt')
const UserSchema = new mongoose.Schema({
  username: {type: String, unique: true},
  password: {type: String, select: true},
  role: { type: String, enum: ['A', 'U'], default: 'U'}
})

UserSchema.pre('save', async function(next) {
  const salt = bcrypt.genSaltSync()
  this.password = bcrypt.hashSync(this.password, salt)
  // console.log(this.password);
  next()
})

UserSchema.methods.verifyPassword = function(plainPassword) {
  return bcrypt.compareSync(plainPassword, this.password)
}

module.exports =  mongoose.model('user', UserSchema)