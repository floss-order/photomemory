const mongoose = require('mongoose')


//Define the user schema
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    zip: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: 6
    }
})

const User = mongoose.model('user', userSchema)

module.exports = User