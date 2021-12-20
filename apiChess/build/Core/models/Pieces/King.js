"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.King = void 0;
const Piece_1 = require("../Piece");
class King extends Piece_1.Piece {
    constructor(white) {
        super(white);
    }
    isValidMoveForThisPiece(board, xStartToEnd, yStartToEnd) {
        if (xStartToEnd + yStartToEnd == 1) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.King = King;
//# sourceMappingURL=King.js.map