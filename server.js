const { on } = require('events');
const express = require('express')
const app = express();

const server = require("http").createServer(app);

const io = require("socket.io")(server);

const { v4: uuidv4}= require('uuid');

const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/',(req,res)=>{
res.redirect(`/${uuidv4()}`);
});

app.get('/:room',(req,res)=>{
    res.render('room',{roomId: req.params.room})
})

server.listen(port,()=>console.log(`Listening on ${port}`));

io.on('connection', socket=>{
    socket.on('join-room', ()=>{
console.log("joinned room")
    })
})