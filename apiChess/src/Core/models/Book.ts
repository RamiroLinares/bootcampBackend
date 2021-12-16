import Mongoose from "mongoose";

const Schema= Mongoose.Schema;

export const BookSchema= new Schema({
    author:{type: String},
    title: {type: String, default: 'No title'},
    date: {type: Date, default: Date.now},
    year: {type: Number, default: 2021}  
})

//export default Mongoose.model('Book',bookSchema)