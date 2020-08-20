const express = require('express')
const router = express.Router()


//User info route
router.get('/profile-info', (req, res) => {
    const page = { title: 'Profile info' }
    res.render('user/profile-info.ejs', { page })
})

//User orders route
router.get('/orders', (req, res) => {
    const page = { title: 'Orders' }
    res.render('user/orders.ejs', { page })
})

module.exports = router