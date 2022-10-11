const express = require('express')
const router = express.Router()
const md5 = require('md5')
const multer = require('multer')
const path = require('path')
const { addFaoliyat_Data, getById, getAll, updateSertifikat, deleteSertifikat } = require('../controller/Faoliyat_dataContoller')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `${md5(Date.now())}${path.extname(file.originalname)}`)
    },
})
const upload = multer({ storage: storage })

router.post('/add', upload.single('photo'), addFaoliyat_Data)
router.get('/all', getAll)
router.get('/:id', getById)
router.put('/:id', upload.single('photo'), updateSertifikat)
router.delete('/:id', deleteSertifikat)

module.exports = router
