const {productService} = require("../../service");


module.exports = {
    getAllProducts: (req, res) => {
        const products = productService.getAllProducts();
        res.render('products', products)
    },

    updateProduct: (req, res) => {
        res.end('Put products')
    },

    deleteProduct: (req, res) => {
        const filtered = productService.deleteProduct()
    },

    createProduct:  (req, res) => {
        const createProduct =  productService.createProduct()
        console.log(req.body)
        res.render('create products', createProduct)
    }
}
