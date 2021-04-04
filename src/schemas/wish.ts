import mongoose, { Document, Schema } from 'mongoose'

import material from '@schemas/material'

export interface IWish extends Document {
  id: string;
  owner: string;
  name: string;
  schoolName: string;
  city: string;
  state: string;
  materials: [{
    name: string;
    cost: string;
    amount: string;
  }],
  collected: number;
  finished: boolean;
  message: [string];
  photo: string;
  guardians: [string];
}

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
      default: 0
    },
    finished: {
      type: Boolean,
      default: false
    },
    message: {
      type: String
    },
    photo: {
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

export default mongoose.model<IWish>('Request', RequestSchema)
