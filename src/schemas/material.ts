import { Schema } from 'mongoose'

const materialSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number
    },
    amount: {
      type: Number,
      required: true
    }
  }
)

export default materialSchema
