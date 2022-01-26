const User = require('../../models/userModal')


let emailValidatorMiddleware = (req,res,next)=>{
    let email = req.body.email
    if(!email.match('^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$')){

        res.status(400).send('email format isnt correct')
        
    }else next()
}

module.exports = {
    emailValidatorMiddleware
}