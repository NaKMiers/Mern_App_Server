const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
const route = require('./routes')
const db = require('./config/db')

const app = express()

// config .env
dotenv.config()

// use middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// routes
route(app)

// connect database (mern_app)
db.connect()

app.listen(process.env.PORT, () => console.log('Server running on localhost:'))
