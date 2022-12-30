import mongoose from 'mongoose'

const connectDB = async () => {
    mongoose.set('strictQuery', true)
    try {
        const conn = await mongoose.connect("mongodb+srv://matt:Busscher1@databasecluster1.ajer3zd.mongodb.net/?retryWrites=true&w=majority", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })

        console.log(`mongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`error: ${error.message}`)
        process.exit(1)
    }
}
export default connectDB;