const express = require('express')
const router = express.Router()
const InstaParse = require('../parser/instagram/instaparse')


//Fetch user info
router.get('/users/:username', async (req, res) => {    

    try {
        const instagramParser = new InstaParse(req.params.username)
        const userInfo = await instagramParser.getInfo()
        res.json(userInfo)
    } 
    
    catch (error) {
        res.status(404).json({
            "error": {
                "description": error.message
            }
        })
    }

})

//Fetch user media
router.get('/users/:username/media', async (req, res) => {

    try {
        const instagramParser = new InstaParse(req.params.username)
        const userMedia = await instagramParser.parseAll()
        res.json(userMedia)
    }

    catch(error) {
        res.status(404).json({
            "error": {
                "description": error.message
            }
        })
    }

})

//Fetch user photos
router.get('/users/:username/media/photos/', async (req, res) => {

    try {
        const instagramParser = new InstaParse(req.params.username)
        const userPhoto = await instagramParser.parsePhoto()
        res.json(userPhoto)
    }

    catch(error) {
        res.status(404).json({
            "error": {
                "description": error.message
            }
        })
    }

})

//Fetch specific number of photos
router.get('/users/:username/media/photos/:quantity', async (req, res) => {

    try {
        const instagramParser = new InstaParse(req.params.username)
        const userPhoto = await instagramParser.parsePhoto(req.params.quantity)
        res.json(userPhoto)
    }

    catch(error) {
        res.status(404).json({
            "error": {
                "description": error.message
            }
        })
    }

})


module.exports = router