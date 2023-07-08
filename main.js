const express=require('express');
const cors=require('cors');
const Sponsers = require('./src/routes/sponsors');
const Events = require('./src/routes/events');
const userSponsor=require('./src/routes/usersponsor')
const userEvent=require('./src/routes/userevent')


const app=express();

app.use(express.json())
app.use(cors({
    origin:"*"
}))

app.use(Sponsers)
app.use(Events)
app.use(userSponsor)
app.use(userEvent)

app.listen(5000,()=>{
    console.log("server is running");
})

