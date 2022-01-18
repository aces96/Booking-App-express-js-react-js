const mongoose = require('mongoose')



const userScheme =  new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String
})


module.exports = mongoose.model('User', userScheme)




