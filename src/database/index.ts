import { createConnection } from 'typeorm'
import { connect } from 'mongoose'

createConnection()

connect('mongodb://mongoadmin:secret@localhost:27017/', {
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
