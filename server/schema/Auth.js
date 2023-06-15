import { Schema, model } from "mongoose";


const authSchema =new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,    
    }
})

export const authModel = model('auth', authSchema);