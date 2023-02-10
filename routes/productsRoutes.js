//requiring express
const express = require("express");
//requiring express router
const router = express.Router();
//importing controllers
const productsController = require('../controllers/productsController')


router.get('/', (req,res) => {
    res.send("Homepage")
})

//routefor creation or to add a product
router.post("/products/create", productsController.create);
//route for display all the products
router.get("/products", productsController.display);
//router to delete the products
router.delete("/products/:id", productsController.delete);
//router to update the database
router.post("/products/:id/update_quantity", productsController.update);

//exporting router
module.exports = router;