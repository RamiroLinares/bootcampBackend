"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const mongoose_1 = require("mongoose");
async function run(BookModel) {
    // 4. Connect to MongoDB
    await (0, mongoose_1.connect)('mongodb://localhost:27017/books');
    const doc = new BookModel({
        author: 'un autor',
        title: 'Un titulo',
        //date: Date.now,
        year: 2021
    });
    //await doc.save();
    console.log(doc);
    return doc.author;
}
exports.run = run;
//# sourceMappingURL=bookDataAccess.js.map