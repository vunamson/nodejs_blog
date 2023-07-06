const express = require('express')
const router = express.Router();
const newsController = require('../app/controllers/NewController')

router.use('/' ,(req,res) => {
    console.log(11111111,res)
     res.render('news')
   })


module.exports = router;