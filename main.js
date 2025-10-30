const express=require('express');
const app=express();

const cors=require('cors');
app.use(cors({
    origin:"*"
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


const userRouter = require('./src/routes/user')
const eventRouter = require('./src/routes/events')
const sponsorRouter = require('./src/routes/sponsors')

app.use('/user',userRouter)
app.use('/event',eventRouter)
app.use('/sponsor',sponsorRouter)

app.listen(5000,()=>{
    console.log("server is running");
})

