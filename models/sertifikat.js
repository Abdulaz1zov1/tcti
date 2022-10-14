const mongoose = require('mongoose')

const SertifikatSchema = mongoose.Schema({
    name: String,
    id: Number,
    photo: String,
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('SertifikatSchema', SertifikatSchema)