import mongoose, { Document, Schema } from 'mongoose'

import product from '@schemas/product'

interface IProductList extends Document {
  owner: string;
  name: string;
  products: [
    {
      name: string;
      price: number;
      amount: number;
    }
  ]
}

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

export default mongoose.model<IProductList>('ProductList', productListSchema)
