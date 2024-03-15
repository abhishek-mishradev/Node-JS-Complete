const express= require('express');
require('./config');
const Product= require('./product');

const app= express();
app.use(express.json());

app.post('/create', async(req, resp)=>{
    let data= new Product(req.body);
    let result= await data.save()
    console.log(result);
    resp.send(result)

});

app.get('/list', async(req, resp)=>{
    let data= await Product.find();
    console.log(data);
    resp.send(data)
});


app.delete('/delete/:_id', async(req, resp)=>{
    console.log(req.params);
    let data= await Product.deleteOne(req.params.id);
    resp.send(data);
  
});


app.put('/update/:_id', async(req, resp)=>{
    console.log(req.params);
    let data= await Product.updateOne(
        {name:m40}
        {
            $set{}
        }
        );
    resp.send(data);
  
});






app.listen(4000);