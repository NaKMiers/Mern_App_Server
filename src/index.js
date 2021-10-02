const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
const cors = require('cors')
const route = require('./routes')
const db = require('./config/db')

const app = express()

// config .env
const port = process.env.PORT

// use middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// routes
route(app)

// connect database (mern_app)
db.connect()

app.listen(port, () => console.log('Server running on localhost: ' + port))
