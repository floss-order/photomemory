const express = require('express')
const router = express.Router()


//Index page
router.get('/', (req, res) => {
    const page = { title: 'PhotoMemory' }
    res.render('index.ejs', { page })
})


module.exports = router