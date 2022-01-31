const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hotelSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true 
    },
    imageCover: {
        type: String,
        required: true,
    },
    images:{
        type: [String],
        required: true
    },
    stars: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    status: {
        type: String
    },
    user_id: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    }
})

let Hotel = mongoose.model('Hotel', hotelSchema)

module.exports = Hotel