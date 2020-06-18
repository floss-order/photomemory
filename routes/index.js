const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')


//Index page
router.get('/', (req, res) => {
    const page = { title: 'PhotoMemory' }
    res.render('index.ejs', { page })
})

router.post('/', (req, res) => {
    
})


module.exports = router