const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema({
    city: {
        type: String,
        required: true,
        trim: true
    },
    pod: {
        type: String,
        required: true,
        trim:true,
    },
    transportMode: {
        type: String,
        required: false,
        trim: true
    },
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    }

})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking