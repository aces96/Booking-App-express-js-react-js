const User = require('../../models/userModal')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')


class authenticationController {
    signUp = async (req,res)=>{
            let username = req.body.username
            let email = req.body.email
            let password = req.body.password
            let gender = req.body.gender
            let role = req.body.role

            user = await  User.insertMany({
                username: username,
                email: email,
                password: password,
                gender: gender,
                role: role
            },(err,resp)=>{
                if(err){
                    console.log(err)
                }else {
                    res.send(resp)
                    console.log(resp)
                }
            })


            
            
            
    }

    signIn = async (req,res)=>{

        const user = await User.findOne({
            username: req.body.username
        },(err,reslt)=>{
            if(err){
                res.send('error')
                console.log(err)
            }else{
                console.log(reslt)
            }
        }).clone()

        if(req.body.username == user.username && req.body.password == user.password ){
            const payload = {
                username: user.username,
                role: user.role
            }
            const token = jwt.sign(payload,process.env.SECRET,{
                expiresIn: "10d"
            })

            res.status(200).json({
                token: token,
            })
        }




    }
}



module.exports = authenticationController