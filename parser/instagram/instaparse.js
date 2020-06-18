const instamancer = require('instamancer')


const options = {
    total: 0,
    headless: false,
    userDataDir: './userData'
}
let user = instamancer.createApi('user', 'ggntu_highpark', options)

async function getPosts() {
    try {
        for await (const post of user.generator()) {
            console.log(post)
        }
    }

    catch(e) {
        console.log(e)
    }

}

getPosts()