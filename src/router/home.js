const express = require('express')
const router = express.Router();
const newsController = require('../app/controllers/NewController')

router.use('/' ,(req,res) => {
     res.render('home')
   })


module.exports = router;