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
        res.status(400).send(error)
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
        res.send('<h1>Поздравляю, вы успешно авторизовались</h1>')
    }

    catch(error) {
        res.status(400).send(`Эмммм, что-то не так - ${error}`)
    }
 })

module.exports = router