const mongoose = require("mongoose");
const saveInDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
  const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String,
  });

  const ProductsModel = mongoose.model("products", productSchema);
  let data = new ProductsModel({
    name: "MM80",
    price: 1000,
    brand: "m8",
    category: "mobiles",
  });
  let result = await data.save();
  console.log(result);
};
saveInDB();

const updateInDB = async () => {
  const Product = mongoose.model("products", productSchema);

  let data = await Product.updateOne(
    { name: "MM80" },
    { $set: { price: 2000 } }
  );
  console.log(data);
};

updateInDB();

const deleteInDB = async () => {
  const Product = mongoose.model("products", productSchema);

  let data = await Product.deleteOne({ name: "MM80" });
  console.log(data);
};

deleteInDB();


const findInDB = async () => {
    const Product = mongoose.model("products", productSchema);
  
    let data = await Product.find();
    console.log(data);
  };
  
  findInDB();
