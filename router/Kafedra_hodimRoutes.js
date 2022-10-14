const express = require('express')
const router = express.Router()
const multer = require('../config/multer')

const { addKafedra_Hodim, getById, getAll, updateKafedra_Hodim, deleteKafedra_Hodim } = require('../controller/Kafedra_hodimController')



router.post('/add', multer, addKafedra_Hodim)
router.get('/all', getAll)
router.get('/:id', getById)
router.put('/:id', multer, updateKafedra_Hodim)
router.delete('/:id', deleteKafedra_Hodim)

module.exports = router
