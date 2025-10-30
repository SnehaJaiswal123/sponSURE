const express=require('express');
const app=express();

const cors=require('cors');
app.use(cors({
    origin:"*"
}))
app.use(express.json())

const userRouter = require('./src/routes/user')
const eventRouter = require('./src/routes/events')

app.use('/user',userRouter)
app.use('/event',eventRouter)

app.listen(5000,()=>{
    console.log("server is running");
})

