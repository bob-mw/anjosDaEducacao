import mongoose, { Document, Schema } from 'mongoose'

import material from './material'

type MaterialList = Document & { }

const materialListSchema = new Schema({
  name: {
    type: String,
    required: true,
    uppercase: true,
    unique: true
  },
  materials: [
    material
  ]
})

export default mongoose.model<MaterialList>('MaterialList', materialListSchema)
