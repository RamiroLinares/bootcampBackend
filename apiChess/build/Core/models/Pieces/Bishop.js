"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bishop = void 0;
const Piece_1 = require("../Piece");
class Bishop extends Piece_1.Piece {
    constructor(white) {
        super(white);
    }
    isValidMoveForThisPiece(board, start, end) {
        let xStartToEnd = Math.abs(start.getX() - end.getX());
        let yStartToEnd = Math.abs(start.getY() - end.getY());
        if (xStartToEnd === yStartToEnd) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Bishop = Bishop;
//# sourceMappingURL=Bishop.js.map