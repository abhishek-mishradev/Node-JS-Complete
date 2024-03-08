// Express js 

const express = require("express");

const app= express();

app.get('', (req, resp)=>{
    resp.send(`<h1>hello, this is home page</h1>
    <a href= "/about">Go to about page</a>
    `);

});


app.get('/about', (req, resp)=>{
    resp.send(`
    <input type = "text" placeholder= "username" value="${req.query.name}"/>
    <button>click</button>
    <a href= "/">Go to home page</a>
    `);

});
app.get('/welcome', (req, resp)=>{
    resp.send([
        {
            name:"mishra",
            email:"m@gmail.com"
        },
        {
            name:"abhi",
            email:"a@gmail.com"
        }
    ]);

});

app.listen(5000);




