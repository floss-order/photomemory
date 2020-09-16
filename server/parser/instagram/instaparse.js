const instaTouch = require('instatouch')
//const path = require('path')

async function startParse(account) {
    try {
        const userMeta = await instaTouch.getUserMeta(account)
        const options = {
            count: userMeta.graphql.user.edge_owner_to_timeline_media.count, 
            download: false,
            mediaType: 'image',
            //filepath: path.join(__dirname, 'scraped'),
            //filetype: `json`
        }
        const userImage = await instaTouch.user(account, options)
        return userImage
        
    } catch (error) {
        throw error
    }
}

module.exports = { startParse }