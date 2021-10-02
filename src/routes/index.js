const postsRouter = require('./posts')

function route(app) {
   app.use('/posts', (req, res) => {
      res.send('<h1 style="color: #4caf50">This is Posts</h1>')
   })

   app.get('/', (req, res) => {
      res.send('<h1 style="color: #f44336">Welcome Mern App</h1>')
   })
}

module.exports = route
