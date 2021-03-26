import mongoose, { Document, Schema } from 'mongoose'

type Requisition = Document & {}

const RequisitionSchema = new Schema(
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

export default mongoose.model<Requisition>('Requisition', RequisitionSchema)
