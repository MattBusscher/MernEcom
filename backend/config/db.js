import mongoose from 'mongoose'

const connectDB = async () => {
    mongoose.set('strictQuery', true)

    const uri = process.env.MONGO_URI

    if (!uri) {
        console.error('error: MONGO_URI is not set. Copy .env.example to .env and fill it in.')
        process.exit(1)
    }

    try {
        const conn = await mongoose.connect(uri)

        console.log(`mongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`error: ${error.message}`)
        process.exit(1)
    }
}
export default connectDB;
