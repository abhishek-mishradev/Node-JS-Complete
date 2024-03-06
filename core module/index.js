// core module

// 1. data base conection
// 2. files creation
// 3. code process
// 4. api call

// bcz ye phle se hamare programming language k ander bne hote h

// for example

// console.log("hello");

// FileSystem, buffer, HTTP

// global and non global module , such module that is no need to import like console.log()

// console.log("hello");

// const fs= require("fs"); // fs is non global bcz it need to import 
// fs.writeFileSync("hello.txt", "abhishek mishra");

// we can do that also 

const fs= require("fs").writeFileSync;
fs("hello2.txt", "abhishek mishra");

// console.log(__dirname);
// console.log(__filename);
// console.log("-->",__filename);



