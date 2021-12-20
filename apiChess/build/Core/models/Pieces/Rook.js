"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rook = void 0;
const Piece_1 = require("../Piece");
class Rook extends Piece_1.Piece {
    constructor(white) {
        super(white);
    }
    isValidMoveForThisPiece(board, start, end) {
        let xStartToEnd = Math.abs(start.getX() - end.getX());
        let yStartToEnd = Math.abs(start.getY() - end.getY());
        if ((xStartToEnd == 0 && yStartToEnd != 0) || (xStartToEnd != 0 && yStartToEnd == 0)) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Rook = Rook;
//# sourceMappingURL=Rook.js.map