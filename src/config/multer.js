import multer from 'multer'
import { resolve } from 'path'

const multerConfig = {
	dest: resolve(__dirname, '..', '..', 'temp', 'uploads'),
	storage: multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, resolve(__dirname, '..', '..', 'temp', 'uploads'))
		},
		filename: function (req, file, cb) {
    		cb(null, file.fieldname + '-' + Date.now())
  		}
	}),
	limits: {
		fileSize: 3 * 1024 * 1024
	},
	fileFilter: function (req, file, cb) {
		const formats = [
			'image/jpeg',
			'image/pjpeg',
			'image/png',
			'image/gif'
			//'application/vnd.ms-excel',
			//'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
		]

		if(formats.includes(file.mimetype)) {
			cb(null, true)
		} else {
			cb(new Error('Invalid file type'))
		}
	}
	
}

export default multerConfig

