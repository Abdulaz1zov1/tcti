const mongoose = require('mongoose')
const KafedraSchema = mongoose.Schema({
    title_uz:String,
    title_ru:String,
    title_en:String,
    body_uz:String,
    body_ru:String,
    body_en:String,
    photo:String,
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('Kafedra', KafedraSchema)