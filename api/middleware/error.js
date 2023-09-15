export const errorHandler = (err, req, res, next) => {
  console.error(err)
  res.status(500).send('Something has broken!')
}

export const boomErrorHandler = (err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err
    return res.status(output.statusCode).json(output.payload)
  }
  next(err)
}
