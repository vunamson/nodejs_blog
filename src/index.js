const express = require('express')
const morgan = require('morgan')
const path =require('path')
const engine = require( 'express-handlebars')


const app = express()
const port = 3000
app.use(express.static(path.join(__dirname,'public')))
app.use(morgan('combined'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.engine('hbs', engine.engine({
  extname : '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views' , path.join(__dirname,'rescor/views'))
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/serch' ,(req,res) =>{
  res.render('serch')
})



app.post('/serch' ,(req,res) =>{
  console.log(req.body)
  res.send('')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})