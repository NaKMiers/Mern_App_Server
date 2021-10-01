const mongoose = require('mongoose')

async function connect() {
   try {
      await mongoose.connect(
         'mongodb+srv://admin:CIcsesQgCxD5OCk2@cluster0.y3jw8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
      )
      console.log('Connect Database Success')
   } catch (error) {
      console.log('Connect Database Fail')
   }
}

module.exports = { connect }
