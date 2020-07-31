const express = require('express')
const router = express.Router()


//Sign up route
router.get('/sign-up', (req, res) => {
    const page = { title: 'Sign up' }
    res.render('auth/register.ejs', { page })
})

module.exports = router