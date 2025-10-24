const express=require('express');
const app=express();

const cors=require('cors');
app.use(cors({
    origin:"*"
}))
app.use(express.json())

app.listen(5000,()=>{
    console.log("server is running");
})

