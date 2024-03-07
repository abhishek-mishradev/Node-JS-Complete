const fs= require('fs');

// fs.writeFileSync("apple.txt", "this is apple file");

const path= require('path');
// const dirPath= path.join(__dirname); it give only directory name 
const dirPath= path.join(__dirname, "file"); // here second argument is file given by yourself
// for(i=0; i<5; i++){
//     // fs.writeFileSync("hello" +i+" .txt", "simple text file"); 
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`, "simple text file");

// }

fs.readdir(dirPath, (err, file)=>{
    // console.log(file);

    file.forEach((item)=>{
        console.log(item);

    })

})