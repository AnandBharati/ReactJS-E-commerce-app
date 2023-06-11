import mongoose, {Schema, model} from 'mongoose'

const userSchema = Schema({
    username: String,
    email: String,
    firstame: String,
    lastname: String,
    dob: mongoose.SchemaTypes.Date,
    addressline1: String,
    addressline2: String,
    city: String,
    country: String,
    pincode: String,
})

export const userModel = model('user', userSchema) 