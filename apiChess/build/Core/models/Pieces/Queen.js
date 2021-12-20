"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queen = void 0;
const Piece_1 = require("../Piece");
class Queen extends Piece_1.Piece {
    constructor(white) {
        super(white);
    }
    isValidMoveForThisPiece(xStartToEnd, yStartToEnd) {
        if ((xStartToEnd == 0 && yStartToEnd != 0) || (xStartToEnd != 0 && yStartToEnd == 0)) {
            return true; //rook movement
        }
        else if (!((xStartToEnd == 0 && yStartToEnd != 0) || (xStartToEnd != 0 && yStartToEnd == 0))) {
            return true; //bishop movement
        }
        else {
            return false;
        }
    }
}
exports.Queen = Queen;
//# sourceMappingURL=Queen.js.map