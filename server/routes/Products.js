import { productModel } from '../schema/products.js'
import { Router } from 'express'

const router = Router()

router.post('/add', async (req, res) => {
    const { id, name, desc, image, category, subcategory, price, seller, manifacturedBy } = req.body
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

    res.status(200).json({ msg: result })
    console.log('saved')
})

router.get('/all', async (req, res) => {
    const result = await productModel.find({})
    res.status(200).json(result);
})


router.get('/bycategory/:category', async (req, res) => {
    // const result = await productModel.find({})
    const result = await productModel.find({ 'category': req.params.category })
    res.status(200).json(result);
})

router.get('/category/all', async (req, res) => {
    const set = new Set();
    const result = await productModel.find()
    result && result.map((item) => set.add(item.category));
    res.status(200).json({ categories: [...set] });
})

router.get('/subcategory/:category', async (req, res) => {
    const set = new Set();
    const result = await productModel.find({ 'category': req.params.category })
    result && result.map((item) => set.add(item.subcategory));
    res.status(200).json({ subcategories: [...set] });
})

router.get('/:id', async (req, res) => {
    const prod_id = req.params.id;
    const result = await productModel.findOne({ id: prod_id })
    res.status(200).json(result)
})

router.get('/search/:keyword', async (req, res) => {
    const keyword = req.params.keyword;
    const result = await productModel.find({})
    const filtered = result.filter((item) => item.name.search(keyword)>0)
    res.status(200).json(filtered)
})


export default router;
