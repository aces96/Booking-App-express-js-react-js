const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roomSchema = new Schema({
    number: {
        type: String,
        required: true,
    },
    roomQuantity: {
        type: Number,
        required: true 
    },
    description: {
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true
    },
    hotel_id: {
        type: Schema.Types.ObjectId, ref: 'Hotel',
        required: true,
    },

    roomType_id: {
        type: Schema.Types.ObjectId, ref: 'roomType',
        required: true
    }
})

let Room = mongoose.model('Room', roomSchema)

module.exports = Room

