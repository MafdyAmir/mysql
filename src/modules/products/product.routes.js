import { Router } from "express";
import * as productController from './product.controller.js'
const router = Router()

router.post('/addProduct',productController.addProduct)
router.put('/updateProduct/:id',productController.updateProduct)
router.delete('/deleteProduct/:id/:userID',productController.deleteProduct)
router.get('/getAllProducts',productController.getAllProducts)
router.get('/search_Product',productController.search_Product)


export default router;
