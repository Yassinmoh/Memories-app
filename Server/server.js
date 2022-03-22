const express = require('express');
const app = express();
const port=process.env.PORT || 5000
const bodyParser =require('body-parser')
const mongoose = require('mongoose')
require ('./db.js')
const cors =require('cors')
app.use(cors())
app.use(express.json());
//ROUTERS:
const postRoutes= require('./routes/posts')



app.use('/posts',postRoutes)

app.get('/',(req, res) => {
    res.send('wecome to memory app')
})




app.use(bodyParser.json({limit:"30mb" , extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb" , extended:true}))






app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})