import express from 'express';
import dotenv, { config } from 'dotenv';
import products from './products.js';
import connectDB from './config/db.js'

dotenv.config() 

connectDB()

const app = express()
app.get('/', (req, res) => {
    res.send('API is running..')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})
app.get('/api/products/:id', (req, res) => {
    const product = product.find((p) => p._id === req.params.id)
    res.json(products)
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.Node_ENV} port ${PORT}`))