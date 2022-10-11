const mongoose = require('mongoose')
const connectDB = async () => {
    mongoose.connect(
          "mongodb://localhost:27017/ll"
    )

    console.log(`MongoDB Connected`)
}
module.exports = connectDB
