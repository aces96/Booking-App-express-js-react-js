const express = require('express')
const router =  express.Router()
const authController = require('../controllers/authenController/authenController')


router.route('/signup')
        .post((req,res)=>{
            const authCont = new authController
            authCont.signUp(req,res)
        })

router.route('/signin')
        .post((req,res)=>{
            let authCont =  new authController
            authCont.signIn(req,res)
        })




        module.exports = router