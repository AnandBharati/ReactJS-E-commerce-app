import { Schema, model } from "mongoose";

const productSchema = Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
    },
    image: {
        type: String,
    },
    category: {
        type: String
    },
    subcategory: {
        type: String
    },
    price: {
        type: Number
    },
    seller: String,
    manifacturedBy: String,
    manifacturedOn: Date,
    dateAdded: Date,
    dateUpdated: Date,
})

export const productModel = model('product', productSchema)