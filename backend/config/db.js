import mongoose from 'mongoose'

const connectDB = async () => {
    mongoose.set('strictQuery', true)
    try {
        const conn = await mongoose.connect("process.ENV.DB", {
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
