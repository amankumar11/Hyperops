const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim:true,
        unique:true,
        lowercase:true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('Email is Invalid')
            }
        }
    },
    password: {
        type: String,
        required: false,
        trim: true
    },

})
userSchema.pre('save', async function (next) {

    const user = this

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
    }
    next()

})


const User = mongoose.model('User', userSchema)

module.exports = User