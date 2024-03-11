const express= require('express');
const path= require("path");

const app= express();

const publicPath= path.join(__dirname, 'public');

app.set('view engine', 'ejs')

app.get("", (_, resp)=>{
    resp.sendFile(`${publicPath}/index.html`)

});


app.get("/profile", (_, resp)=>{
    const user={
        name:"abhishek",
        email: "a@gmail.com"
    }
   resp.render('profile', {user})

});




app.get("/about", (_, resp)=>{
    resp.sendFile(`${publicPath}/about.html`)

});

app.get("*", (_, resp)=>{
    resp.sendFile(`${publicPath}/pageNotFound.html`)

});


app.listen(5000)