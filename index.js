const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')

const userRouter = require('./router/signup')
mongoose.connect('mongodb://localhost/bookingApp')


const app = express()

app.listen(3000)

app.use(bodyparser.urlencoded({extended: true}))


app.use('/api', userRouter)

