const express = require('express')
const router = express.Router()


//Sign up route
router.get('/sign-up', (req, res) => {
    const page = { title: 'Sign up' }
    res.render('auth/register.ejs', { page })
})

//Sign in route
router.get('/sign-in', (req, res) => {
    const page = { title: 'Sign in' }
    res.render('auth/sign-in.ejs', { page })
})

module.exports = router