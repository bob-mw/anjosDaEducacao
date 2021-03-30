import mongoose, { Document, Schema } from 'mongoose'

import material from './material'
import son from './son'

type Request = Document & {}

const RequestSchema = new Schema(
  {
    owner: {
      type: String,
      required: true
    },
    son,
    materials: [
      material
    ],
    donated: {
      type: Number,
      required: true,
      default: 0
    },
    finished: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model<Request>('Request', RequestSchema)
