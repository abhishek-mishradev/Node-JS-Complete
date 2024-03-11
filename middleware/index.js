const express = require("express");
const app= express();

const reqFilter=(req, resp, next)=>{
  if(!req.query.age){
    resp.send("plz provide age")
  }
 else if(req.query.age<18){
    resp.send("you can not access this page")
  }
  else{
    next();

  }
  

}

app.use(reqFilter)

app.get('/', (req, resp)=>{
    resp.send("welcome to home page")

})

app.get('/welcome', (req, resp)=>{
    resp.send("welcome to welcome page")

})

app.listen(5000)

// types of middleware 

// application- level middleware
// router level middleware
// error handling middleware
// built-in middleware 
// thirdparty middleware