import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import authRouter from './routes/Auth.js'
import productRouter from './routes/Products.js'
import userRouter from './routes/User.js'
import fetch from 'node-fetch'


const app = express()
app.use(express.json())
app.use(cors({ origin: '*' }))

const db = mongoose.connect('mongodb+srv://anand:anand@cluster0.t1nmhac.mongodb.net/ecom')
db.then(() => console.log('connection successful'))
    .catch((e) => console.log('error', e))


app.listen(process.env.PORT || 2000)
app.get('/', (req, res) => {
    res.status(200).json({ msg: 'working' })
})





app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/product', productRouter)
app.all('*', async (req, res, next) => {
    console.log('inside *');
    const error = new Error("invalid route");
    error.statusCode = 404;
    next(error);
})

app.use((error, req, res, next) => {
    console.log("inside middleware")
    error.status = 404
    return res.status(error.status).json({ success: false, error: error.message, name: error.name, })
})