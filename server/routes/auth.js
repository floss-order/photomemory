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

    try {
        const user = await User.create( { fullName, phone, address, zip, email, password } )
        res.sendStatus(201)
    } 
    
    catch (error) {
        res.status(400).json(error)
    }
    
})

//Sign in route
router.get('/sign-in', (req, res) => {
    const page = { title: 'Sign in' }
    res.render('auth/sign-in.ejs', { page })
})

router.post('/sign-in', async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.signIn(email, password)
        req.session.user = user
        req.session.isSignedIn = true
        req.session.save(error => {
            if(error) throw error
            res.json(req.session)
        })
    }

    catch(error) {
        res.status(400).json({
            "error": {
                "description": error.message
            }
        })
    }
 })

//Sign out the user
router.post('/sign-out', (req, res) => {
    req.session.destroy(error => {
        if(error) throw error
    })
})

module.exports = router