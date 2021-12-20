"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pawn = void 0;
const Piece_1 = require("../Piece");
class Pawn extends Piece_1.Piece {
    constructor(white) {
        super(white);
    }
    isValidMoveForThisPiece(board, start, end) {
        let xStartToEnd = Math.abs(start.getX() - end.getX());
        let yStartToEnd = Math.abs(start.getY() - end.getY());
        if (xStartToEnd + yStartToEnd == 1) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Pawn = Pawn;
//# sourceMappingURL=Pawn.js.map