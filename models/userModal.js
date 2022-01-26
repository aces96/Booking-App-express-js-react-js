const mongoose = require('mongoose')



const userScheme =  new mongoose.Schema({
    username: {
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
    gender: [
        'male',
        'female'
    ],
    role: [
        'admin',
        'client',
        'proprietaire'
    ]
})


module.exports = mongoose.model('User', userScheme)




