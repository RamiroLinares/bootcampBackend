"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bishop = void 0;
const Piece_1 = require("../Piece");
class Bishop extends Piece_1.Piece {
    constructor(white) {
        super(white);
    }
    isBishopNotCollisioning(board, start, end) {
        var _a;
        const dirX = end.getX() > start.getX() ? 1 : -1;
        const dirY = end.getY() > start.getY() ? 1 : -1;
        for (let i = 1; i <= Math.abs(end.getX() - start.getX()) - 1; ++i) {
            console.log(i);
            if (board.squares[start.getX() + i * dirX][start.getY() + i * dirY].getPiece() !== null) {
                return false;
            }
            else if (((_a = end.getPiece()) === null || _a === void 0 ? void 0 : _a.isWhite()) === !this.white) {
                return true;
            }
        }
        return true;
    }
    isValidMoveForThisPiece(board, start, end) {
        let xStartToEnd = Math.abs(start.getX() - end.getX());
        let yStartToEnd = Math.abs(start.getY() - end.getY());
        console.log(xStartToEnd);
        console.log(yStartToEnd);
        if (xStartToEnd === yStartToEnd) {
            console.log("ENTRA AL IF");
            return this.isBishopNotCollisioning(board, start, end);
        }
        else {
            return false;
        }
    }
}
exports.Bishop = Bishop;
//# sourceMappingURL=Bishop.js.map