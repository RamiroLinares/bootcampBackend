"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const BookSchema_1 = require("./External/Infrastructure/dataAccess/BookSchema");
const bookDataAccess_1 = require("./External/Infrastructure/dataAccess/bookDataAccess");
const app = (0, express_1.default)();
const port = 3000;
app.get('/', async (req, res) => {
    const BookModel = (0, mongoose_1.model)('Book', BookSchema_1.BookSchema);
    const str = await (0, bookDataAccess_1.run)(BookModel).catch(err => console.log(err));
    console.log(str);
    res.send(str);
});
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map