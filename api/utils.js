import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)

export const readJSON = (path) => require(path)

// const products = Array.from({ length: 40 }, (_, i) => (
//   {
//     id: randomUUID(),
//     name: faker.commerce.product(),
//     price: parseInt(faker.commerce.price()),
//     image: faker.image.url()
//   }
// ))

// fs.appendFileSync('./app/data/products.json', JSON.stringify(products), (err) => {
//   if (err) {
//     console.error(err)
//     process.exit(1)
//   }
// })
