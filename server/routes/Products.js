import { addProduct, fetchAllCategory, fetchAllproduct, fetchProductById, fetchProductsByCategory, fetchSubCategory, searchProduct } from '../controller/ProductController.js'
import { Router } from 'express'

const router = Router()

router.post('/add', addProduct)

router.get('/all', fetchAllproduct)

router.get('/bycategory/:category', fetchProductsByCategory)

router.get('/category/all', fetchAllCategory)

router.get('/subcategory/:category', fetchSubCategory)

router.get('/:id', fetchProductById)

router.get('/search/:keyword', searchProduct)

export default router;

