const socket = io ('https://localhost:8000');
//Get DOM elements in respective Js variable
const from = document.getElementById('send-container');
const messageInput= document.getElementById('messageInp')
const messageContainer = document.querySelector(".container")

// Audio that will play on reciving messages
var audio = new Audio (ting.mp3);

//Function which will append event info to the container
const append = (message, position) =>{
    
}