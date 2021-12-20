"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
class Piece {
    constructor(white) {
        this.killed = false;
        this.white = false;
        this.setWhite(white);
    }
    isWhite() {
        return this.white;
    }
    setWhite(white) {
        this.white = white;
    }
    isKilled() {
        return this.killed;
    }
    setKilled(killed) {
        this.killed = killed;
    }
    canMove(start, end) {
        if (end.getPiece().isWhite() == this.isWhite()) {
            return false;
        }
        let xStartToEnd = Math.abs(start.getX() - end.getX());
        let yStartToEnd = Math.abs(start.getY() - end.getY());
        return this.isValidMoveForThisPiece(xStartToEnd, yStartToEnd);
    }
    ;
    isValidMoveForThisPiece(xStartToEnd, yStartToEnd) {
    }
}
exports.Piece = Piece;
//# sourceMappingURL=Piece.js.map