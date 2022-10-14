const express = require('express')
const router = express.Router()
const multer = require('../config/multer')
const { addElon, getById, getAll, updateElon, deleteElon } = require('../controller/ElonController')



router.post('/add', multer, addElon)
router.get('/all', getAll)
router.get('/:id', getById)
router.put('/:id', multer, updateElon)
router.delete('/:id', deleteElon)

module.exports = router
