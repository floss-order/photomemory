const express = require('express')
const router = express.Router()
const User = require('../models/user')

//Sign up route
router.get('/sign-up', (req, res) => {
    const page = { title: 'Sign up', layout: false }
    res.render('auth/sign-up.ejs', { page })
})

//Sign up a new user
router.post('/sign-up', async (req, res) => {
    const { fullName, phone, address, zip, email, password } = req.body

    const user = await User.create( { fullName, phone, address, zip, email, password } )
    
})

//Sign in route
router.get('/sign-in', (req, res) => {
    const page = { title: 'Sign in' }
    res.render('auth/sign-in.ejs', { page })
})

module.exports = router