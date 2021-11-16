const chatinput=document.getElementById("chatinput");
const send=document.getElementById("send");
let chatbox=document.querySelector(".chatbox");
const name=document.getElementById("loginname");
const login=document.getElementById("login");
let chatinputdiv=document.querySelector(".chatinput");
let nameval
login.addEventListener("click",function(){
    nameval =name.value;
    if(nameval)
    {
       socket.emit("join-chat",nameval);
        modal.style.display = "none";
        chatbox.classList.remove("hide");
        chatinputdiv.classList.remove("hide");
    }
   
})
send.addEventListener("click",function(e){
   
    let text=chatinput.value;
    if(text)
    {
        socket.emit("chat-send",{name:nameval,text});
        let chatdiv=document.createElement("div");
        chatdiv.classList.add("chat");
        chatdiv.classList.add("right");

        let chatname=document.createElement("div");
        chatname.classList.add("chat-name");
        chatname.innerHTML=name.value;

        let chattext=document.createElement("div");
        chattext.classList.add("chat-text");
        chattext.innerHTML=text;

        chatdiv.append(chatname);
        chatdiv.append(chattext);

        chatbox.appendChild(chatdiv);

        chatbox.scrollTop=chatbox.scrollHeight;
        chatinput.value="";

    }
})