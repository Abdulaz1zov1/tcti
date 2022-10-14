const express = require('express')
const router = express.Router()
const { addSub_Catagory, getById, getAll, updateSub_Catagory, deleteSub_Catagory, getQuery } = require('../controller/subCatagoryControl')



router.post('/add',  addSub_Catagory)
router.get('/all', getAll)
router.get('/query', getQuery)
router.get('/:id', getById)
router.put('/:id',  updateSub_Catagory)
router.delete('/:id', deleteSub_Catagory)

module.exports = router
