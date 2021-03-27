import { createConnection } from 'typeorm'
import { connect } from 'mongodb'

createConnection()

connect('mongodb://localhost:27017/angels', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
