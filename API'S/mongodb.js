const {MongoClient}= require("mongodb");
const url= 'mongodb://127.0.0.1:27017';
const client= new MongoClient(url);
const databaseName= "amazon";

async function dbConnect(){
    let result= await client.connect();
    db= result.db(databaseName)
    return db.collection('products');

}

module.exports=dbConnect;