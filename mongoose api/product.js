const mongoose= require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    brancd: String,
});

module.exports= mongoose.model('product', productSchema);