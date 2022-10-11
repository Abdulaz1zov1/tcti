const express = require('express')
const router = express.Router()
const md5 = require('md5')
const multer = require('multer')
const path = require('path')
const { addKafedra_Hodim, getById, getAll, updateKafedra_Hodim, deleteKafedra_Hodim } = require('../controller/Kafedra_hodimController')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `${md5(Date.now())}${path.extname(file.originalname)}`)
    },
})
const upload = multer({ storage: storage })

router.post('/add', upload.single('photo'), addKafedra_Hodim)
router.get('/all', getAll)
router.get('/:id', getById)
router.put('/:id', upload.single('photo'), updateKafedra_Hodim)
router.delete('/:id', deleteKafedra_Hodim)

module.exports = router
