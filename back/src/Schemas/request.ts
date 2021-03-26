import mongoose, { Document, Schema } from 'mongoose'

type Request = Document & {}

const RequestSchema = new Schema(
  {
    owner: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    materials: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Material'
      }
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
