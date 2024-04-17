const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
//product -controller-functions -calling
const {getProducts,getProduct,createProduct,updateProduct,deleteProduct} = require('../controllers/product.controller.js')

//route-api

//get
router.get('/',getProducts);
router.get('/:id',getProduct);

//post
router.post('/',createProduct);

//update
router.put('/:id',updateProduct);

//delete
router.delete('/:id',deleteProduct);


module.exports = router;