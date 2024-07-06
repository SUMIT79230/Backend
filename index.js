const express = require('express')
require('dotenv').config()

const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Hello everyone !</h1>')
})

app.listen(process.env.PORT,()=>{
    console.log(`Server started at ${process.env.PORT}`)
})