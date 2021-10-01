const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Posts = new Schema(
   {
      title: {
         type: String
      },
      content: {
         type: String
      },
      author: {
         type: String,
         default: 'Anonymous'
      },
      attachment: String,
      likeCount: {
         type: Number,
         default: 0
      }
   },
   { timestamps: true }
)

module.exports = mongoose.model('Posts', Posts)
