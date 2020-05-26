const {products} = require('../../products')

class ProductService {
    getProduct(productId){
        console.log(products.productId)
        return products.some(product => product.productId === productId);
    }

    getAllProducts(){
        return products;
    }

    createProduct(productId, name, type){
        products.push({
            productId,
            name,
            type
        })

    }

    deleteProduct(productId){
        return products.filter(product => product.productId === productId);
    }
}


module.exports = new ProductService;
