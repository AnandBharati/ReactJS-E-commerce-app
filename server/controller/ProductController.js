import {productModel} from '../schema/products.js'

export const addProduct = async (req, res) => {
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
}

export const fetchAllproduct = async (req, res) => {
    try {
        const result = await productModel.find({})
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json("error occured", error.stackTrack)
    }
}

export const fetchProductsByCategory = async (req, res) => {
    // const result = await productModel.find({})
    const result = await productModel.find({ 'category': req.params.category })
    res.status(200).json(result);
}

export const fetchAllCategory = async (req, res) => {
    const set = new Set();
    const result = await productModel.find()
    result && result.map((item) => set.add(item.category));
    res.status(200).json({ categories: [...set] });
}

export const fetchSubCategory = async (req, res) => {
    const set = new Set();
    const result = await productModel.find({ 'category': req.params.category })
    result && result.map((item) => set.add(item.subcategory));
    res.status(200).json({ subcategories: [...set] });
}

export const fetchProductById = async (req, res) => {
    const prod_id = req.params.id;
    const result = await productModel.findOne({ id: prod_id })
    res.status(200).json(result)
}

export const searchProduct = async (req, res) => {
    const keyword = req.params.keyword.toUpperCase();
    const result = await productModel.find({})
    const filtered = result.filter((item) => item.name.toUpperCase().search(keyword) >= 0)
    res.status(200).json(filtered)
}