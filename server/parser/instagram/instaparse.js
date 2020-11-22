const instaTouch = require('instatouch')


class InstaParse {
    static username
    static options = {
        count: null,
        mediaType: '',
        proxy: ''
    }

    constructor(username) {
        InstaParse.username = username
    }

    async getInfo() {

        try {
            const userMeta = await instaTouch.getUserMeta(InstaParse.username)
            const userInfo = {
                username: userMeta.graphql.user.username,
                profile_pic_url: userMeta.graphql.user.profile_pic_url_hd,
                posts: userMeta.graphql.user.edge_owner_to_timeline_media.count,
                followers: userMeta.graphql.user.edge_followed_by.count,
                following: userMeta.graphql.user.edge_follow.count
            }

            return userInfo
        }

        catch(error) {
            throw new Error('Unable to fetch user info')
        }

    }

    static async getCount() {
        const userMeta = await instaTouch.getUserMeta(InstaParse.username)
        return userMeta.graphql.user.edge_owner_to_timeline_media.count
    }

    parsePhoto(count) {
        return this.parseAll(count, 'photo')
    }

    async parseAll(count, mediaType = 'all') {

        InstaParse.options.mediaType = mediaType

        try {

            if(!count) {
                InstaParse.options.count = await InstaParse.getCount()
            }
    
            const userMedia = await instaTouch.user(InstaParse.username, InstaParse.options)
            return userMedia.collector
        }

        catch(error) {
            throw new Error('Unable to fetch user media')
        }

    }

}

module.exports = InstaParse