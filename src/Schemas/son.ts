import mongoose, { Document, Schema } from 'mongoose'

type Son = Document & {}

const SonsSchema = new Schema(
  {
    name: {
      type: String
    },
    requests: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Request'
      }
    ]
  },
  {
    timestamps: true
  }
)

export default mongoose.model<Son>('Son', SonsSchema)
