const express=require('express');
const cors=require('cors');
const Sponsers = require('./src/routes/sponsors');
const Events = require('./src/routes/events');
const userSponsor=require('./src/routes/usersponsor')
const userEvent=require('./src/routes/userevent')
const io = socketIo(server);


const app=express();

app.use(express.json())

app.use('/chat', chatController);
app.use(cors({
    origin:"*"
}))

app.use(Sponsers)
app.use(Events)
app.use(userSponsor)
app.use(userEvent)


app.get('/',(req,res)=>{
    res.send("Welcome to sponSURE")
    console.log("Welcome to sponSURE");
})
app.listen(5000,()=>{
    console.log("server is running");
})

