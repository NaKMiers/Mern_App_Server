const postsRouter = require('./posts')

function route(app) {
   app.use('/', postsRouter)
   // app.get('/', (req, res) => {
   //    res.send('<h1>Welcome to Mern App</h1>')
   // })
}

module.exports = route
