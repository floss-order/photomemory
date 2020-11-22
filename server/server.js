const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongodb-session')(session)
const authMiddleware = require('./middleware/authMiddleware')
const cors = require('cors')

if(process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}


//Server config
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.set('layout', 'layouts/layout.ejs')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(cors())
app.use(express.json())
app.use(session({
    name: 'user_id',
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 5, //5 hours   
    },
    store: new MongoStore({
        collection: 'sessions',
        uri: process.env.DB_URL
    }, error => { if(error) throw error } )
}))
app.use(authMiddleware.checkAuth)

//Routes list
const instagramAPI = require('./api/instagram.js')
const authRouter = require('./routes/auth.js')
app.use('/api/instagram', instagramAPI)
app.use('/auth', authRouter)

//Connect to the database and run the server
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true } )
    .then( () => {
        console.log('Successfully connected to the database!')
        app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))
    })
    .catch((err) => { throw err } )
