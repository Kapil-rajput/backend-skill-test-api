const Product = require("../models/productsModel");

module.exports.create = async function (req, res) {
  const product = new Product({
    name: req.body.name,
    quantity: req.body.quantity,
  });
  try {
    const saveProduct = await product.save();
    res.json(saveProduct);
  } catch (error) {
    console.log(error);
  }
};

module.exports.display = async function (req, res) {
  try {
    const products = await Product.find();
      res.json({ products: products });
  } catch (error) {
    console.log(error);
  }
};
module.exports.delete = async function (req, res) {
  try {
    const productDelete = await Product.deleteOne({ _id: req.params.id });
      res.send({ message: "Product deleted" });
  } catch (error) {
    console.log(error);
  }
};
module.exports.update = async function (req, res) {
  
};
