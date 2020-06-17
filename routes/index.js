const express = require('express')
const router = express.Router()


//Index page
router.get('/', (req, res) => {
    res.sendFile('/home/floss/Downloads/dev.png')
})


module.exports = router