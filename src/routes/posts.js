const express = require('express')
const router = express.Router()

const postController = require('../app/controllers/PostController')

router.get('/', postController.index)
router.post('/', postController.createPost)
router.post('/update', postController.updatePost)
router.post('/delete', postController.deletePost)

module.exports = router
