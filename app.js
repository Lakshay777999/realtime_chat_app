const express = require('express');
const app = require("express")(); // create a server
const http = require("http").createServer(app);
const io = require("socket.io")(http);
app.use(express.static("public"))
let user=[];

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'public/index.html');
});

io.on('connection', function(socket)  {
    console.log("connected"+socket.id);
    socket.on("join-chat",function(name)
    {
     user.push({id:socket.id,name});
        socket.broadcast.emit("user-joined",name);
    })
    socket.on("chat-send",function(object){
        socket.broadcast.emit("recieve-chat",object);
    })
    socket.on("disconnect",function(){
        let u=user.filter(function(obj){
            return obj.id==socket.id;
        })
       
        socket.broadcast.emit("left",u[0]);
        user=user.filter(function(obj){
            return obj.id!=socket.id;
        })
    })
 
});
let port=process.env.PORT||3001;
http.listen(port, () => {
  console.log('listening on : ${port}');
});
