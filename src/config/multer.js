import multer from 'multer'
import * as path from 'path';

const multerConfig = {
	dest: path.resolve(__dirname, '..', '..', 'public', 'images'),
	storage: multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, path.resolve(__dirname, '..', '..', 'public', 'images'))
		},
		filename: function (req, file, cb) {
    		cb(null, path.parse(file.originalname).name + Date.now() + path.extname(file.originalname))
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

