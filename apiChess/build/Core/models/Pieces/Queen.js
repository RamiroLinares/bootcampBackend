"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queen = void 0;
const Piece_1 = require("../Piece");
class Queen extends Piece_1.Piece {
    constructor(white) {
        super(white);
    }
    isValidMoveForThisPiece(xStartToEnd, yStartToEnd) {
        return true;
    }
}
exports.Queen = Queen;
//# sourceMappingURL=Queen.js.map