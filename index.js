import express, { json } from 'express'

import { productsRouter } from './app/routes/products.js'
import { boomErrorHandler, errorHandler } from './app/middleware/error.js'
import { corsMiddleware } from './app/middleware/cors.js'

const app = express()
const router = express.Router()

// Disable X-Powered-By header
app.disable('x-powered-by')

// middleware is used to retrieve data,
// and place it in our request.body property
app.use(json())

// CORS middleware
app.use(corsMiddleware())

// Global path for all my endpoints.
app.use('/api/v1', router)
router.use('/products', productsRouter)

// middleware is used to handler LogErrors
app.use(boomErrorHandler)
app.use(errorHandler)

const PORT = process.env.PORT ?? 8085

app.listen(PORT, () => {
  console.log(`🔈 serve listening on port:http://localhost:${PORT}`)
})
