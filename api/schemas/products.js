import Joi from 'joi'

export const createProduct = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().integer().min(0).required(),
  image: Joi.string().uri().required()
})

export const updateProduct = Joi.object({
  name: Joi.string(),
  price: Joi.number().integer().min(0),
  image: Joi.string().uri()
})
