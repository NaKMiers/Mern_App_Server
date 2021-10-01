const postsRouter = require('./posts')

function route(app) {
   app.use('/posts', (req, res) => {
      res.send('<h1>Welcome to Mern App</h1>')
   })
   app.get('/', (req, res) => {
      res.send('<h1>Welcome to Mern App</h1>')
   })
}

module.exports = route
