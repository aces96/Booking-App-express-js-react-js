const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roomTypeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
})

let roomType = mongoose.model('roomType', roomTypeSchema)

module.exports = roomType