const express = require('express')
const router = express.Router()
const multer = require('../config/multer')

const { addNews, getById, getAll, updateNews, deleteNews } = require('../controller/YangilikController')




router.post('/add', multer, addNews)
router.get('/all', getAll)
router.get('/:id', getById)
router.put('/:id', multer, updateNews)
router.delete('/:id', deleteNews)

module.exports = router
