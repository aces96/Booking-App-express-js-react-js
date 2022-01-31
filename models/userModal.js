const mongoose = require('mongoose')



const userScheme =  new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 4,
        max: 20,
    },
    email: {
        type: String,
        required: true,
        min: 8,
        max: 40
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 30
    },
    confirmPassword: {
        type: String,
        required: true,
        validate: {
            validator: function(e) {
                return e === this.password;
            },
            message: 'please confirm your password !'
        }
    },
    role: [
        'admin',
        'client',
        'proprietaire'
    ]
})


module.exports = mongoose.model('User', userScheme)




