const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://cha_comigo:cha_comigo@cluster0-udt7r.mongodb.net/test', 
{ useNewUrlParser: true ,  useUnifiedTopology: true }
)

requireDir('./src/models')

app.use('/api', require('./src/routes'))

app.listen(4003 , () => console.log('Product Hunt 4003'))