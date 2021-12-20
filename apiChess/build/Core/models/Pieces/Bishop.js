"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bishop = void 0;
const Piece_1 = require("../Piece");
class Bishop extends Piece_1.Piece {
    constructor(white) {
        super(white);
    }
    isInt(n) {
        return Number(n) === n && n % 1 === 0;
    }
    isValidMoveForThisPiece(xStartToEnd, yStartToEnd) {
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