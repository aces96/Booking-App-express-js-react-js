require('dotenv').config()
const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const authen = require('./router/authentication')
const {emailValidatorMiddleware} = require('./middlewares/authmiddlewares/authmiddleware')
mongoose.connect(process.env.DB_HOST)


const app = express()

app.listen(process.env.PORT)

app.use(bodyparser.urlencoded({extended: true}))


app.use('/api',emailValidatorMiddleware, authen)

