const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  // We use the query property to retrive the query parameters.
  const { limit, offset } = req.query

  if (!limit || !offset) {
    return res.send('There are no parameters 💣')
  }

  res.json({
    limit,
    offset
  })
})

module.exports = router
