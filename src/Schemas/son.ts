import { Schema } from 'mongoose'

const sonSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    school: {
      type: String,
      required: true
    }
  }
)

export default sonSchema
