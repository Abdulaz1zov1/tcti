const express = require('express')
const router = express.Router()
const multer = require('../config/multer')
const { addFaoliyat_Data, getById, getAll, updateSertifikat, deleteSertifikat } = require('../controller/Faoliyat_dataContoller')



router.post('/add', multer, addFaoliyat_Data)
router.get('/all', getAll)
router.get('/:id', getById)
router.put('/:id', multer, updateSertifikat)
router.delete('/:id', deleteSertifikat)

module.exports = router
