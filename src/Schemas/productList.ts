import mongoose, { Document, Schema } from 'mongoose'

import product from '@schemas/product'

type ProductList = Document & {}

const productListSchema = new Schema({
  owner: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  products: [
    product.schema
  ]
},
{
  timestamps: true
})

export default mongoose.model<ProductList>('ProductList', productListSchema)
