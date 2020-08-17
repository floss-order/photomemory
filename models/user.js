const mongoose = require('mongoose')
const { isEmail, isMobilePhone } = require('validator')
 

//Define the user schema
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Please enter your full name']
    },

    phone: {
        type: Number,
        required: [true, 'Please enter your phone number'],
        validate: [isMobilePhone, 'Please enter a valid phone number']
    },

    address: {
        type: String,
        required: [true, 'Please enter your address']
    },

    zip: {
        type: Number,
        required: [true, 'Please enter your zip code']
    },

    email: {
        type: String,
        required: true,
        unique: true,
        validate: [isEmail, 'Please enter a valid email']
    },

    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length should be 6 characters long'],
        maxlength: [50, 'Maximum password length should be 50 characters long']
    }
})

const User = mongoose.model('user', userSchema)

module.exports = User