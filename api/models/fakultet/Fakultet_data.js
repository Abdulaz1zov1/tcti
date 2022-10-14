const mongoose = require('mongoose')
const FakultetSchema = mongoose.Schema({
    title_uz:String,
    title_ru:String,
    title_en:String,
    body_uz:String,
    body_ru:String,
    body_en:String,
    photo:Array,
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('Fakultet', FakultetSchema)