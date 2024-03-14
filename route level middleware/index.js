const express = require("express");
const app = express();
const reqFilter= require("./middleware");
const route= express.Router();

route.use(reqFilter)

// const reqFilter = (req, resp, next) => {
//   if (!req.query.age) {
//     resp.send("plz provide age");
//   } else if (req.query.age < 18) {
//     resp.send("you can not access this page");
//   } else {
//     next();
//   }
// };

// in different file 

// app.use(reqFilter);

app.get("/", (req, resp) => {
  resp.send("welcome to home page");
});

app.get("/welcome", (req, resp) => {
  resp.send("welcome to welcome page");
});

route.get("/about", (req, resp) => {
  resp.send("welcome to about page");
});

route.get("/contact", (req, resp) => {
    resp.send("welcome to contact page");
  });

  app.use('/', route)

app.listen(5000);
