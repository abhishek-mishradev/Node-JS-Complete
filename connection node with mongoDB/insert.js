const dbConnect= require('./mongoDB')

const insert= async ()=>{
    const db = await dbConnect()
  const result= await db.insert({
    name:"note 5",
    brand:"vivo",
    price:44,
    category:"mobiles"
  });

  console.log(result);
}
insert();