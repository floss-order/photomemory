const express = require('express')
const router = express.Router()
const instaTouch = require('instatouch')


//Fetch account info
router.get('/:instagramUserName', async (req, res) => {    

    try {
        const userMeta = await instaTouch.getUserMeta(req.params.instagramUserName)

        account = {
            username: userMeta.graphql.user.username,
            profile_pic_url: userMeta.graphql.user.profile_pic_url_hd,
            posts: userMeta.graphql.user.edge_owner_to_timeline_media.count,
            followers: userMeta.graphql.user.edge_followed_by.count,
            following: userMeta.graphql.user.edge_follow.count
        }
        res.json(account)

    } 
    
    catch (error) {
        
        if(!error.message) {
            res.status(404).json({
                "error": {
                    "description": "Cannot find the account"
                }
            })
        }
        
    }
})

module.exports = router