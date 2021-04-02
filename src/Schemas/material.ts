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
  },
  {
    timestamps: true
  }
)

export default materialSchema
