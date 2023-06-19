import { addProduct, fetchAllCategory, fetchAllproduct, fetchProductById, fetchProductPaginated, fetchProductsByCategory, fetchSubCategory, searchProduct } from '../controller/ProductController.js'
import { Router } from 'express'
import { productModel } from '../schema/products.js'

const router = Router()

router.post('/add', addProduct)

router.get('/all', fetchAllproduct)

router.get('/bycategory/:category', fetchProductsByCategory)

router.get('/category/all', fetchAllCategory)

router.get('/subcategory/:category', fetchSubCategory)

router.get('/:id', fetchProductById)

router.get('/search/:keyword', searchProduct)

router.get('/', fetchProductPaginated)

export default router;

