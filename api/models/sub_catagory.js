const mongoose = require('mongoose')

const subcatagorySchema = mongoose.Schema({
    title_uz:String,
    title_ru:String,
    title_en:String,
    name_uz: String,
    name_ru: String,
    name_en: String,
    bolim: String,
    yonalish: String,
    body_uz:String,
    body_ru:String,
    body_en:String,
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('Sub_Catagory', subcatagorySchema)