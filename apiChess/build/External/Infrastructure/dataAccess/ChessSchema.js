"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChessSchemaBoard = exports.ChessSchemaHistory = void 0;
const mongoose_1 = require("mongoose");
exports.ChessSchemaHistory = new mongoose_1.Schema({
    chessHistory: { type: String },
});
exports.ChessSchemaBoard = new mongoose_1.Schema({
    chessBoard: { type: Object }
});
//# sourceMappingURL=ChessSchema.js.map