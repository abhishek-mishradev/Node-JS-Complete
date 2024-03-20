const express= require('express');
const EventEmiter= require('events');
const { EventEmitter } = require('stream');

const app= express();

const event = new EventEmitter();

let count = 0;
event.on("count api", ()=>{
    count++;
    console.log("hello event called", count);
})


app.get('/',(req, resp)=>{
    resp.send('api called');
    event.emit('count api');

});
app.get('/search',(req, resp)=>{
    resp.send('search api called');
    event.emit('count api');

});


app.get('/update',(req, resp)=>{
    resp.send('update api called');
    event.emit('count api');

});

app.listen("5000")