"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pawn = void 0;
const Piece_1 = require("../Piece");
class Pawn extends Piece_1.Piece {
    constructor(white) {
        super(white);
        this.firstMovement = true;
    }
    isValidMoveForThisPiece(board, start, end) {
        let xStartToEnd = (start.getX() - end.getX());
        let yStartToEnd = (start.getY() - end.getY());
        const amountMovement = 1;
        const noAxisMovement = 0;
        if ((this.isWhite())
            && ((xStartToEnd === (-amountMovement)) || (xStartToEnd === (-amountMovement - Number(this.firstMovement))))
            && (yStartToEnd === noAxisMovement)) {
            this.firstMovement = false;
            return true;
        }
        else if ((!this.isWhite())
            && ((xStartToEnd === (amountMovement)) || (xStartToEnd === (amountMovement + Number(this.firstMovement))))
            && (yStartToEnd === noAxisMovement)) {
            this.firstMovement = false;
            return true;
        }
        else if ((end.getPiece() !== null) && (xStartToEnd !== noAxisMovement) && (yStartToEnd !== noAxisMovement) &&
            ((Math.abs(xStartToEnd) + Math.abs(yStartToEnd)) === 2 * amountMovement)) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Pawn = Pawn;
//# sourceMappingURL=Pawn.js.map