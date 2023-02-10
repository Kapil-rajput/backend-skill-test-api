const express = require("express");
const router = express.Router();
const productsController = require('../controllers/productsController')
router.post("/products/create", productsController.create);
router.get("/products", productsController.display);
router.delete("/products/:id", productsController.delete);
router.post("/products/:id/update_quantity", productsController.create);


module.exports = router;