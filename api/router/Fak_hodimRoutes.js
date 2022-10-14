const express = require('express')
const router = express.Router()
const multer = require('../config/multer')

const { addSertifikat, getById, getAll, updateSertifikat, deleteSertifikat } = require('../controller/Fak_HodemController')



router.post('/add', multer, addSertifikat)
router.get('/all', getAll)
router.get('/:id', getById)
router.put('/:id', multer, updateSertifikat)
router.delete('/:id', deleteSertifikat)

module.exports = router
