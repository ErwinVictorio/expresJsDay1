const { z } = require('zod');

// create product validation 
const productSchema = z.object({
  product_name: z.string().min(1, 'product name is required'),
  price: z.number().positive('price is required'),
  des: z.string().min(1, 'description is required')

})

module.exports = { productSchema } 