// Express js 

const express = require("express");

const app= express();

app.get('', (req, resp)=>{
    resp.send(`hello, this is home page`);

});

app.get('/about', (req, resp)=>{
    resp.send(`hello, this is about page`);

});

app.listen(5000);

app.get('/welcome', (req, resp)=>{
    resp.send(`hello, this is welcome page`);

});


