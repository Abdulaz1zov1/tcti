const express = require('express')
const router = express.Router()
const multer = require('../config/multer')

const { addKafedra_Data, getById, getAll, updateKafedra_Data, deleteKafedra_Data } = require('../controller/Kafedra_dataController')


router.post('/add', multer, addKafedra_Data)
router.get('/all', getAll)
router.get('/:id', getById)
router.put('/:id', multer, updateKafedra_Data)
router.delete('/:id', deleteKafedra_Data)

module.exports = router
