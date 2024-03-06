// const http= require("http");



// http.createServer((req, resp)=>{
//     resp.write("this is Abhishek mishra");
//     resp.end();

// }).listen(4200);

// we can do like this 


const http= require("http");

// function createdServer(req, resp){

    // resp.write("this is Abhishek mishra !!!");
    // resp.end();
// }
const createdServer = (req, resp)=>{
    resp.write("<h1>this is Abhishek mishra !!!</h1>");
    resp.end();

}


http.createServer(createdServer).listen(4200);


