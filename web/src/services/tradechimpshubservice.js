import * as signalR from "@aspnet/signalr";

const connection = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:5001/tradechimpsHub")
    .build();

connection.on("ReceiveMessage", (user, message) => {
    Window.Store.dispatch('messageReceived', user + ': ' + message)
    console.log('from server - User:' + user + ' Message:' + message);
     
});


function start() 
{
    connection.start().catch(err => {console.error(err); setTimeout(()=>start(), 5000)});    
}

// If connection breaks - restart
connection.onclose(() => start());

// Start socket connection
start();


export default {
    sendData: (user,message) => {
       connection.invoke("SendMessage", user, message);
    } 
}

