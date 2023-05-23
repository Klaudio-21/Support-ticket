//const express=require('express')
const express = require('express')
require('colors')
require('dotenv').config() 
const {errorHandler}=require('./middleware/errorMiddlewere')

const connectDB=require('./config/db')
const PORT=process.env.PORT 

//Connet to DB

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/',(req, res)=>(
    res.status(200).json({
        message:'Welcom to the Support desk'
    })
))
 
app.use('/api/users',require('./routes/userRoutse'))
app.use('/api/tickets',require('./routes/ticketRoute'))

app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`Serer startd on port ${PORT}`)
})

