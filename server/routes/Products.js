import { productModel } from '../schema/products.js'
import { Router } from 'express'

const router = Router()

router.post('/add', async (req, res) => {
    const {id, name, desc, image, category, subcategory, price, seller, manifacturedBy} =req.body
    const newProduct = new productModel({
        id,
        name,
        desc,
        image,
        category,
        subcategory,
        price,
        seller,
        manifacturedBy,
        manifacturedOn: new Date('2003-04-25'), //todo: check the date posting from front-end
        dateAdded: new Date(),
        dateUpdated: new Date(),
    });
    const result = await newProduct.save();

    res.status(200).json({msg: result})
    console.log('saved')
})

router.get('/all', async (req,res)=>{
    const result = await productModel.find({})
    res.status(200).json(result);
})

export default router;
