import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import authRouter from './routes/Auth.js'
import productRouter from './routes/Products.js'


const app = express()
app.use(express.json())
app.use(cors({ origin: '*' }))

const db = mongoose.connect('mongodb+srv://anand:anand@cluster0.t1nmhac.mongodb.net/ecom')
db.then(() => console.log('connection successful'))
    .catch((e) => console.log('error', e))


app.listen(2000)
app.get('/', (req, res) => {
    res.status(200).json({ msg: 'working' })
})

app.use('/auth', authRouter)
app.use('/product', productRouter)