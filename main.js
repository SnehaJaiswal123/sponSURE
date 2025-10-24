const express=require('express');
const app=express();

const cors=require('cors');
app.use(cors({
    origin:"*"
}))
app.use(express.json())

const userRouter = require('./src/routes/user')

app.use('/user',userRouter)

app.listen(5000,()=>{
    console.log("server is running");
})

