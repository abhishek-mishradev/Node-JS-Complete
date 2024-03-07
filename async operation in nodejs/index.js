// console.log("first");
// setTimeout(()=>{
//     console.log("second");

// },1000)
// console.log("third");

// drawback

// let a = 10;
// let b = 0;

// setTimeout(() => {
//    b=20;
//   }, 2000);

//   console.log(a + b);

  let a = 10;
let b = 0;

let waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 2000);
});

waitingData.then((data) => {
  b = data;
  console.log(a + b);
});
