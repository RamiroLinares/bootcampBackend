"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveMovement = void 0;
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
//# sourceMappingURL=bookDataAccess.js.map