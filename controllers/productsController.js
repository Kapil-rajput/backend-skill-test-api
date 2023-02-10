const Product = require("../models/productsModel");

module.exports.create = async function (req, res) {
  const product = new Product({
    name: req.body.name,
    quantity: req.body.quantity,
  });
  try {
    const saveProduct = await product.save();
      res.json(saveProduct);
      console.log(savedProduct)
  } catch (error) {
    res.json({
      message: "Unable To Create Data",
    });
  }
};
module.exports.display = async function (req, res) {
  res.send("Display all post");
};
module.exports.delete = async function (req, res) {
  res.send("delete post");
};
module.exports.update = async function (req, res) {
  res.send("Update post");
};
