import { randomBytes } from 'crypto'
import path from 'path'
import multer from 'multer'

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'tmp'),
    filename (request, file, callback) {
      const fileHash = randomBytes(20).toString('hex')

      const fileName = `${fileHash}-${file.originalname}`

      return callback(null, fileName)
    }
  })
}
