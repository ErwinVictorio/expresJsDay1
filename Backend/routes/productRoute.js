const express = require('express');

const app = express();
// app.use(express.json())
const router = express.Router();
const productController = require('../controller/productController');
// require the validate function
const validate = require('../middlewares/productValidator')
 const { productSchema } = require('../validators/productSchema')


// routes for products
router.get('/', productController.getProduct);

// routes for creating product
router.post('/',validate(productSchema), productController.createProduct)

//  routes for  showing product by id
 router.get('/:id',productController.showById)


module.exports = router;