import { randomUUID } from 'node:crypto'
import { readJSON } from '../utils.js'

const products = readJSON('./data/products.json')

export class ProductModel {
  static async getAll ({ size }) {
    if (size) {
      return products.slice(0, size)
    }
    return products
  }

  static async getById ({ id }) {
    const product = products.find((product) => product.id === id)
    return product
  }

  static async create ({ data }) {
    const newProduct = {
      id: randomUUID(),
      ...data
    }

    products.push(newProduct)

    return newProduct
  }

  static async delete ({ id }) {
    const productIndex = products.findIndex((product) => product.id === id)
    if (productIndex === -1) return false

    products.slice(productIndex, 1)
    return true
  }

  static async update ({ id, data }) {
    const productIndex = products.findIndex((product) => product.id === id)
    if (productIndex === -1) return false

    products[productIndex] = {
      ...products[productIndex],
      ...data
    }

    return products[productIndex]
  }
}
