

let emailValidatorMiddleware = (req,res,next)=>{
    let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    let email = req.body.email
    if(!regex.test(email)){

        res.status(400)
        res.send('email format isnt correct')

    }else next()
}

module.exports = {
    emailValidatorMiddleware
}