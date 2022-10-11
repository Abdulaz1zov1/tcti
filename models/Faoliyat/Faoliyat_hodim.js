const mongoose = require('mongoose')
const FaoliyatHodimSchema = mongoose.Schema({
    Lavozim_uz:String,
    Lavozim_ru:String,
    Lavozim_en:String,
    IsimSharif_uz:String,
    IsimSharif_ru:String,
    IsimSharif_en:String,
    tell:Number,
    E_mail:String,
    photo: String,
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('FaoliyatHodimSchema', FaoliyatHodimSchema)