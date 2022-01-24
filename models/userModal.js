const mongoose = require('mongoose')



const userScheme =  new mongoose.Schema({
    name: {
        type: String,
        min: 4,
        max: 20,
    },
    email: {
        type: String,
        min: 8,
        max: 40
    },
    password: {
        type: String,
        min: 8,
        max: 30
    },
    role: {
        type: String,
        min: 4,
        max: 10
    }
})


module.exports = mongoose.model('User', userScheme)




