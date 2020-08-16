const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()


//Server config
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.set('layout', 'layouts/layout.ejs')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded( { limit: '10mb', extended: false } ))

//Routes list
const indexRouter = require('./routes/index.js')
const authRouter = require('./routes/auth.js')
app.use('/', indexRouter)
app.use('/auth', authRouter)

//Connect to the database and run the server
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true } )
    .then( () => {
        console.log('Successfully connected to the database!')
        app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))
    })
    .catch((err) => { throw err } )
