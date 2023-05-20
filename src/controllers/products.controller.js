import Product from '../models/Product';

module.exports ={
    createProduct: async(req, res) =>{
        const {name, category, price, imgURL} = req.body
        
        const newProduct = new Product({name, category, price, imgURL});

        const productSaved = await newProduct.save();

        res.status(201).json(productSaved)
    },
    getProducts: async(req, res)=>{
        const products = await Product.find();
        res.json(products);
    },
    getProductById: async(req, res)=>{
        const product = await Product.findById(req.params.productId);
        res.status(200).json(product);
    },
    updateProductById: async(req, res)=>{
        const updateProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {new: true});
        res.status(200).json(updateProduct);

    },
    deleteProductById: async(req, res)=>{
        const {productId} = req.params;
        await Product.findByIdAndDelete(productId);
        res.status(204).json();
    }


}