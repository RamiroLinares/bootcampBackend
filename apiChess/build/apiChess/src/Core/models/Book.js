"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSchema = void 0;
//import Mongoose from "mongoose";
const mongoose_1 = require("mongoose");
//const Schema= Mongoose.Schema;
exports.BookSchema = new mongoose_1.Schema({
    author: { type: String },
    title: { type: String, default: 'No title' },
    date: { type: Date, default: Date.now },
    year: { type: Number, default: 2021 }
});
//export default Mongoose.model('Book',bookSchema)
//# sourceMappingURL=Book.js.map