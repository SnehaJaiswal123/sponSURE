const express=require('express');
const app=express();

const {Server}=require('socket.io')
const http=require('http')
const server=http.createServer(app)
const io=new Server(server)

io.on('connection',(socket)=>{
    console.log("connected");
    
    socket.on('client-msg',(message)=>{
        console.log("A new message from client",message);
        io.emit('server-msg',message)
    })

})


const cors=require('cors');
const Sponsers = require('./src/routes/sponsors');
const Events = require('./src/routes/events');
const user=require('./src/routes/user')

app.use(express.json())

app.use(cors({
    origin:"*"
}))

app.use(Sponsers)
app.use(Events)
app.use(user)


app.get('/',(req,res)=>{
    res.send("Welcome to sponSURE")
    console.log("Welcome to sponSURE");
})
server.listen(5000,()=>{
    console.log("server is running");
})

