import mongoose, { Document, Schema } from 'mongoose'

type Material = Document & {}

const MaterialSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    cost: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model<Material>('Material', MaterialSchema)
