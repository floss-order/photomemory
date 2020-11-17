const mongoose = require('mongoose')
const { isEmail, isMobilePhone } = require('validator')
const bcrypt = require('bcrypt')
const mongooseBeautifulUniqueValidation = require('mongoose-beautiful-unique-validation')
const mongooseValidationErrorTransform = require('mongoose-validation-error-transform')

mongoose.plugin(mongooseBeautifulUniqueValidation)
mongoose.plugin(mongooseValidationErrorTransform, {
    capitalize: false,
    transform: function(messages) {
        return messages.join(', ') 
    }
})

//Define the user schema
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Please enter your full name']
    },

    phone: {
        type: String,
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
        unique: '{VALUE} is already in use',
        validate: [isEmail, 'Please enter a valid email']
    },

    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length should be 6 characters long'],
        maxlength: [50, 'Maximum password length should be 50 characters long']
    }
})

//Password hashing
userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

userSchema.statics.signIn = async function (email, password) {
    const user = await this.findOne({ email })
    console.log(user)

    if (!user) {
      throw Error('Incorrect email or password')
    }
   
    const auth = await bcrypt.compare(password, user.password)

    if (!auth) {
      throw Error('Incorrect email or password')
    }
   
    return user
}

const User = mongoose.model('user', userSchema)

module.exports = User