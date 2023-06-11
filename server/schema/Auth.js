import { Schema, model } from "mongoose";


const authSchema = Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String
    }
})

export const authModel = model('auth', authSchema);