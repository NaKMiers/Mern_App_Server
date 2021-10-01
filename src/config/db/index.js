const mongoose = require('mongoose')

async function connect() {
   try {
      await mongoose.connect(process.env.DB_URL)
      console.log('Connect Database Success')
   } catch (error) {
      console.log('Connect Database Fail')
   }
}

module.exports = { connect }
