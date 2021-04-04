import { Schema } from 'mongoose'

const materialSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    cost: {
      type: Number
    },
    amount: {
      type: Number,
      required: true
    }
  }
)

export default materialSchema
