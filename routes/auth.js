const express = require('express')
const router = express.Router()


//Sign in route
router.get('/sign-in', (req, res) => {
    const page = { title: 'Sign up' }
    res.render('register.ejs', { page })
})

module.exports = router