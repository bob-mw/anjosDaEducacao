import multer from 'multer'

import multerConfig from '@config/upload'

const upload = multer(multerConfig)

export default upload
