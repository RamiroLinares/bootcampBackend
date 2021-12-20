"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bishop = void 0;
const Piece_1 = require("../Piece");
class Bishop extends Piece_1.Piece {
    constructor(white) {
        super(white);
    }
    isValidMoveForThisPiece(xStartToEnd, yStartToEnd) {
        if ((xStartToEnd == 0 && yStartToEnd != 0) || (xStartToEnd != 0 && yStartToEnd == 0)) {
            return false;
        }
        else {
            return true;
        }
    }
}
exports.Bishop = Bishop;
//# sourceMappingURL=Bishop.js.map