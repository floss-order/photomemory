const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const instaparse = require('../parser/instagram/instaparse.js')


//Index page
router.get('/', async (req, res) => {
    //let data = await instaparse.startParse('ggntu_highpark')
    const page = { title: 'PhotoMemory' }
    res.render('index.ejs', { page })
})

router.get('/:instagramUserName', (req, res) => {
    console.log(req.params)
})

module.exports = router