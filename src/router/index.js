const newRouter = require('./news')
const homeRoouter = require('./home')
function route(app){
    app.use('/news',newRouter)
    app.use('/',homeRoouter)
}

module.exports = route;