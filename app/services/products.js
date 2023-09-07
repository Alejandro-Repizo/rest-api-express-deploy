import { ProductModel } from '../models/product.js'
import Boom from '@hapi/boom'

export class ProductsServices {
  static async getAll (req, res) {
    // const ACCEPTED_ORIGINS = [
    //   'http://localhost:3030'
    // ]

    // const origin = req.header('origin')

    // if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
    //   res.header('Access-Control-Allow-Origin', origin)
    // }

    const { size } = req.query
    const products = await ProductModel.getAll({ size })
    res.json(products)
  }

  static async getById (req, res, next) {
    try {
      const { id } = req.params

      const product = await ProductModel.getById({ id })

      if (!product) {
        throw Boom.notFound('Product not found')
      }

      res.json(product)
    } catch (error) {
      next(error)
    }
  }

  static async create (req, res) {
    const newProduct = await ProductModel.create({ data: req.body })
    res.status(201).json(newProduct)
  }

  static async delete (req, res, next) {
    try {
      const { id } = req.params
      const result = await ProductModel.delete({ id })

      if (result === false) {
        throw Boom.notFound('Product not found')
      }

      res.json({ message: 'Product deleted' })
    } catch (error) {
      next(error)
    }
  }

  static async update (req, res, next) {
    try {
      const { id } = req.params
      const updatedProduct = await ProductModel.update({ id, data: req.body })

      if (updatedProduct === false) {
        throw Boom.notFound('Product not found')
      }

      res.json(updatedProduct)
    } catch (error) {
      next(error)
    }
  }
}
