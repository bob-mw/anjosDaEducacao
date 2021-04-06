import mongoose, { Document, Schema } from 'mongoose'

type Product = Document & {}

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
})

export default mongoose.model<Product>('Product', productSchema)
