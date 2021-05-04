const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://admin:grepper007@progrepperuserdb.irues.mongodb.net/progrepperusers?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        }) //to avoid warnings

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDB
