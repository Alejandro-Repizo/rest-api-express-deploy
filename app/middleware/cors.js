import cors from 'cors'

const ACCEPTED_ORIGINS = [
  'http://localhost:3030'
]

export const corsMiddleware = ({ acceptedOrigions = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (acceptedOrigions.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
})
