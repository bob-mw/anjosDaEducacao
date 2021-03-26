import mongoose, { Document, Schema } from 'mongoose'

type Son = Document & {}

const SonSchema = new Schema(
  {
    name: {
      type: String
    },
    school: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model<Son>('Son', SonSchema)
