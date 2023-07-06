class NewController {
    index(req,res) {
     console.log(11111111,res)
      res.render('news')
    }
}

module.exports =  NewController;