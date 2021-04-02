import mongoose, { Document, Schema } from 'mongoose'

import material from '@schemas/material'

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
    schoolName: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    materials: [
      material
    ],
    collected: {
      type: Number,
      required: true,
      default: 0
    },
    finished: {
      type: Boolean,
      default: false
    },
    message: {
      type: String
    },
    guardians: [
      String
    ]
  },
  {
    timestamps: true
  }
)

export default mongoose.model<Request>('Request', RequestSchema)
