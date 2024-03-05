// to run node js program go to particular folder then type node then file name  eg "node .\index.js" then type enter

// var a= 20;
// var b = 20;

// console.log(a+b);

// console.log(new Error("hello"));


// var x = 20;

// if(x===20){
//     console.log("match");
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i);
    
// }

// import {x} from './app';  we cant use like that 

const app = require("./app")



// console.log(arr);
// console.log(arr[0]);

// console.log(app);
// console.log(app.x);
// console.log(app.y);
// console.log(app.z());

const arr =[2,4,7,1,3,8,3];

// arr.filter((item)=>{
//     console.log(item);

// })


const result = arr.filter((item)=>{
   return item === 3

})

console.log(result);