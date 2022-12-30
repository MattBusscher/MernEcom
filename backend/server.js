import express from 'express';
import dotenv, { config } from 'dotenv';
import connectDB from './config/db.js'
import productRouters from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js';



dotenv.config() 

connectDB()

const app = express()

app.use((req, res, next) => {
    console.log(req.originalUrl)
    next()
})
app.get('/', (req, res) => {
    res.send('API is running..')
})

app.use('/api/products', productRouters)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.Node_ENV} port ${PORT}`))
