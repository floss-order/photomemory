const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const bodyParser = require('body-parser')


//Server config
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.set('layout', 'layouts/layout.ejs')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded( { limit: '10mb', extended: false } ))

//Routes list
const indexRouter = require('./routes/index.js')
app.use('/', indexRouter)

//Server startup
app.listen(process.env.PORT || 3000)