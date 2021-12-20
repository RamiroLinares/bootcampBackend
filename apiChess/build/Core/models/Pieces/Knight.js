"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Knight = void 0;
const Piece_1 = require("../Piece");
class Knight extends Piece_1.Piece {
    constructor(white) {
        super(white);
    }
    isValidMoveForThisPiece(xStartToEnd, yStartToEnd) {
        if (xStartToEnd * yStartToEnd == 2) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Knight = Knight;
//# sourceMappingURL=Knight.js.map