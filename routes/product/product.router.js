const {Router} = require('express');

const productController = require("../../controllers/product/product.controller");



const productRouter = Router();

productRouter.post('/', productController.createProduct)

productRouter.get('/', productController.getAllProducts);
//
// productRouter.put('/', productController.updateProduct);
//
productRouter.delete('/:productId', productController.deleteProduct);


module.exports = productRouter;
