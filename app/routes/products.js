import { Router } from 'express'
import { ProductsServices } from '../services/products.js'
import { createProduct, updateProduct } from '../schemas/products.js'
import { validatorHandler } from '../middleware/validatorHandler.js'

export const productsRouter = Router()

productsRouter.get('/', ProductsServices.getAll)
productsRouter.post('/', validatorHandler(createProduct, 'body'), ProductsServices.create)
productsRouter.get('/:id', ProductsServices.getById)
productsRouter.patch('/:id', validatorHandler(updateProduct, 'body'), ProductsServices.update)
productsRouter.delete('/:id', ProductsServices.delete)
