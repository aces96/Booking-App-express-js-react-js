const mongoose = require('mongoose')


const userScheme = new mongoose.scheme({
    name: String,
    email: String,
    password: String,
    role: String
})


const user = mongoose.model('User', userScheme)


module.exports = {
    user
}