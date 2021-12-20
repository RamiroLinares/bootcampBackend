"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queen = void 0;
const Piece_1 = require("../Piece");
class Queen extends Piece_1.Piece {
    constructor(white) {
        super(white);
    }
    isValidMoveForThisPiece(board, xStartToEnd, yStartToEnd) {
        if ((xStartToEnd == 0 && yStartToEnd != 0) || (xStartToEnd != 0 && yStartToEnd == 0)) {
            return true; //rook movement
        }
        else if (xStartToEnd === yStartToEnd) { //bishop movement
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Queen = Queen;
//# sourceMappingURL=Queen.js.map