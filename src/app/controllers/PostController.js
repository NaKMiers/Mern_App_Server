const PostsModel = require('../model/PostsModel')

class PostController {
   // [GET] /posts
   index = async function (req, res) {
      try {
         // const posts = await PostsModel.find()
         res.status(200).json({ posts: 'nothing here' })
      } catch (error) {
         res.status(500).json({ error })
      }
   }

   // [POST] /posts
   createPost = async function (req, res) {
      try {
         let data = req.body
         if (data.title.trim() === '') {
            data = { ...data, title: 'Untitle' }
         }
         const newPost = new PostsModel(data)
         newPost.save()

         res.status(200).json(newPost)
      } catch (error) {
         res.status(500).json({ error })
      }
   }

   // [POST] /posts
   updatePost = async function (req, res) {
      try {
         const data = req.body
         const updatedPost = await PostsModel.findOneAndUpdate({ _id: data._id }, data, {
            new: true
         })

         res.status(200).json(updatedPost)
      } catch (error) {
         res.status(500).json({ error })
      }
   }

   // [DELETE] /posts
   deletePost = async function (req, res) {
      try {
         const data = req.body
         await PostsModel.deleteOne({ _id: data._id })
         res.status(200).json(data)
      } catch (error) {
         res.status(500).json({ error })
      }
   }
}

module.exports = new PostController()
