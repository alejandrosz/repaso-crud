require('dotenv').config()

const express = require('express')
const app = express()
const mongoose     = require('mongoose');

const dbtitle = 'repaso-crud'
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useUnifiedTopology: true, useNewUrlParser: true })



// DB, middlewares, locals & debug
require('./configs/mongoose.config')
require('./configs/middlewares.config')(app)
require('./configs/preprocessor.config')(app)
require('./configs/locals.config')(app)
require('./configs/debug.config')

// Base URL's
app.use('/', require('./routes/index.routes'))
app.use('/coasters', require('./routes/coaster.routes'))
app.use('/parks', require('./routes/park.routes'))

module.exports = app