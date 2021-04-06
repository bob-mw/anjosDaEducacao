import { randomBytes } from 'crypto'
import path from 'path'
import multer from 'multer'

const destination = path.resolve(__dirname, '..', '..', 'tmp')

export default {
  destination,
  storage: multer.diskStorage({
    destination,
    filename (request, file, callback) {
      const fileHash = randomBytes(20).toString('hex')

      const fileName = `${fileHash}-${file.originalname}`

      return callback(null, fileName)
    }
  })
}
