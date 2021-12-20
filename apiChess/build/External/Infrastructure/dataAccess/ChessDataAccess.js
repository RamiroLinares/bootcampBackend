"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadMatch = exports.saveMatch = exports.saveMovement = void 0;
const mongoose_1 = require("mongoose");
async function saveMovement(ChessModel, chessHistory) {
    await (0, mongoose_1.connect)('mongodb://localhost:27017/chess');
    const doc = new ChessModel({
        chessHistory: chessHistory
    });
    await doc.save();
    console.log(doc);
    (0, mongoose_1.disconnect)();
    return doc.chessHistory;
}
exports.saveMovement = saveMovement;
async function saveMatch(ChessModel, chessBoard) {
    await (0, mongoose_1.connect)('mongodb://localhost:27017/chess');
    const doc = new ChessModel({
        chessBoard: chessBoard
    });
    await doc.save();
    (0, mongoose_1.disconnect)();
    return doc.chessBoard;
}
exports.saveMatch = saveMatch;
async function loadMatch(ChessModel, chessBoard) {
    await (0, mongoose_1.connect)('mongodb://localhost:27017/chess');
    /*   const doc = await (ChessModel.find().sort({ _id: -1 }).limit(1).then((products:any) => {
        console.log(products)
    }))
      disconnect(); */
    return await (ChessModel.find().sort({ _id: -1 }).limit(1));
}
exports.loadMatch = loadMatch;
//# sourceMappingURL=ChessDataAccess.js.map