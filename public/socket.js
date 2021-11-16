socket.on("user-joined",function(name){
   
    let joindiv=document.createElement("div");
    joindiv.classList.add("chat");
    joindiv.classList.add("join");
    joindiv.innerHTML=`${name} Joined the chat`;
    chatbox.append(joindiv);
})
socket.on("recieve-chat",function(object){
    let chatdiv=document.createElement("div");
    chatdiv.classList.add("chat");
    chatdiv.classList.add("left");

    let chatname=document.createElement("div");
    chatname.classList.add("chat-name");
    chatname.innerHTML=object.name;

    let chattext=document.createElement("div");
    chattext.classList.add("chat-text");
    chattext.innerHTML=object.text;

    chatdiv.append(chatname);
    chatdiv.append(chattext);

    chatbox.appendChild(chatdiv);

    chatbox.scrollTop=chatbox.scrollHeight;
})
socket.on("left",function(obj){
    let joindiv=document.createElement("div");
    joindiv.classList.add("chat");
    joindiv.classList.add("leave");
    joindiv.innerHTML=`${obj.name} left the chat`;
    chatbox.append(joindiv);
})