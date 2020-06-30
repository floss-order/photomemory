const instaTouch = require('instatouch')
//const path = require('path')

async function startParse(account) {
    try {
        const options = { 
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