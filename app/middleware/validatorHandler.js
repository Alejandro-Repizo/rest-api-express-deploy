import Boom from '@hapi/boom'

export const validatorHandler = (schema, property) => (req, res, next) => {
  const data = req[property]
  const { error } = schema.validate(data, { abortEarly: false })
  if (error) next(Boom.badRequest(error))
  next()
}
