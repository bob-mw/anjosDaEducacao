import mongoose, { Document, Schema } from 'mongoose'

import Request from '@entities/request'

type Sons = Document & {}

const SonsSchema = new Schema(
  {
    requests: [Request]
  },
  {
    timestamps: true
  }
)

export default mongoose.model<Sons>('Sons', SonsSchema)
