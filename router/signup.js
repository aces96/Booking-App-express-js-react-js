const express = require('express')
const jwt = require('jsonwebtoken')
const router =  express.Router()
const User = require('../models/userModal')


router.route('/signup')
        .post(async(req,res)=>{
            const name = req.body.name
            const email = req.body.email
            const password = req.body.password
            const role = req.body.role

            const user = await new User.insertMany({name: name, email:email,password:password,role:role})
            console.log(user)


        })

router.route('/signin')
        .post(async(req,res)=>{
            let email 
            const user =  await User.findOne({email: req.body.email})

            if(req.body.email == user.email && req.body.password == user.password){
                let token = jwt.sign({email:email},'secretkey')
                res.json({
                    token:token
                })
            }
            
        })




        module.exports = router