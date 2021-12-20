"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const BookSchema_1 = require("./External/Infrastructure/dataAccess/BookSchema");
const bookDataAccess_1 = require("./External/Infrastructure/dataAccess/bookDataAccess");
const Board_1 = require("./Core/models/Board");
const app = (0, express_1.default)();
const port = 3000;
const board = new Board_1.Board();
function isLetter(letter) {
    return (letter.toUpperCase() != letter.toLowerCase());
}
app.get('/', async (req, res) => {
    const BookModel = (0, mongoose_1.model)('Book', BookSchema_1.BookSchema);
    const str = await (0, bookDataAccess_1.run)(BookModel).catch(err => console.log(err));
    console.log(str);
    res.send(str);
});
app.get('/initGame', (req, res) => {
    board.resetBoard();
    res.send("board reseted");
});
app.get('/game/:movement', function (req, res) {
    var _a;
    const movement = req.params.movement;
    const movements = [];
    for (let i = 0; i < movement.length; i++) {
        if (isLetter(movement.charAt(i))) {
            movements.push(movement.charCodeAt(i) - 97);
        }
        else {
            movements.push(Number(movement.charAt(i)) - 1);
        }
    }
    const posInitialLetter = movements[0];
    const posInitialNumber = movements[1];
    const posEndLetter = movements[2];
    const posEndNumber = movements[3];
    const initBoardSquare = board.squares[posInitialNumber][posInitialLetter];
    const endBoardSquare = board.squares[posEndNumber][posEndLetter];
    if ((_a = initBoardSquare.getPiece()) === null || _a === void 0 ? void 0 : _a.canMove(initBoardSquare, endBoardSquare)) {
        res.send("movement is " + req.params.movement + "is valid");
    }
    else {
        res.send("movement is " + req.params.movement + "is NOT valid");
    }
});
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map