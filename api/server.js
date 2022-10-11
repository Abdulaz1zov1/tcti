const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()


const connectDB = require('./db/db')
connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use(express.static('public'))


app.use('/elon', require('./router/ElonRoutes'))
app.use('/news', require('./router/YangilikRoutes'))
app.use('/bm_data', require('./router/BM_dataRoutes'))
app.use('/bm_hodim', require('./router/BM_hodimRoutes'))
app.use('/Fak_data', require('./router/Fak_dataRoutes'))
app.use('/Fak_hodim', require('./router/Fak_hodimRoutes'))
app.use('/sertifikat', require('./router/SertificatRoutes'))
app.use('/sub_catagory', require('./router/sub_catagoryRoutes'))
app.use('/kafedra_data', require('./router/Kafedra_dataRoutes'))
app.use('/Faoliyat_data', require('./router/Faoliyat_dataRoutes'))
app.use('/kafedra_hodim', require('./router/Kafedra_hodimRoutes'))
app.use('/Faoliyat_hodim', require('./router/Faoliyat_hodimRoutes'))





app.listen(5000, console.log('run server 5000 port'))
