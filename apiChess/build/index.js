"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const ChessSchema_1 = require("./External/Infrastructure/dataAccess/ChessSchema");
const ChessDataAccess_1 = require("./External/Infrastructure/dataAccess/ChessDataAccess");
const Board_1 = require("./Core/models/Board");
const app = (0, express_1.default)();
const port = 3000;
let board = new Board_1.Board();
function isLetter(letter) {
    return (letter.toUpperCase() != letter.toLowerCase());
}
app.get('/', async (req, res) => {
    res.send("/initGame for initialize, /game/:movement for move piece");
});
app.get('/initGame', (req, res) => {
    board.resetBoard();
    res.send("board reseted");
});
app.get('/saveMatch', async (req, res) => {
    const ChessModel = (0, mongoose_1.model)('ChessBoard', ChessSchema_1.ChessSchemaBoard);
    await (0, ChessDataAccess_1.saveMatch)(ChessModel, board).catch(err => console.log(err));
    res.send("match saved");
});
app.get('/loadMatch', async (req, res) => {
    const ChessModel = (0, mongoose_1.model)('ChessBoard', ChessSchema_1.ChessSchemaBoard);
    console.log(board);
    board = await (0, ChessDataAccess_1.loadMatch)(ChessModel, board); //.catch(err => console.log(err));
    console.log(board);
    res.send("last match loaded");
});
app.get('/game/:movement', async (req, res) => {
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
        res.send("movement is " + req.params.movement + " is valid");
        const ChessModel = (0, mongoose_1.model)('Chess', ChessSchema_1.ChessSchemaHistory);
        await (0, ChessDataAccess_1.saveMovement)(ChessModel, movement).catch(err => console.log(err));
    }
    else {
        res.send("movement is " + req.params.movement + " is NOT valid");
    }
});
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map