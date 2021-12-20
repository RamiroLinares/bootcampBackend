"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rook = void 0;
const Piece_1 = require("../Piece");
class Rook extends Piece_1.Piece {
    constructor(white) {
        super(white);
    }
    isRookNotCollisioning(board, start, end) {
        var _a;
        let colission = true;
        for (let i = start.getX(); i <= end.getX(); i++) {
            for (let j = start.getY(); j <= end.getY(); j++) {
                if (board.squares[i][j].getPiece() !== null) {
                    colission = false;
                }
                else if (((_a = end.getPiece()) === null || _a === void 0 ? void 0 : _a.isWhite()) === !this.white) {
                    colission = true;
                }
            }
        }
        return colission;
    }
    isValidMoveForThisPiece(board, start, end) {
        let xStartToEnd = Math.abs(start.getX() - end.getX());
        let yStartToEnd = Math.abs(start.getY() - end.getY());
        if ((xStartToEnd == 0 && yStartToEnd != 0) || (xStartToEnd != 0 && yStartToEnd == 0)) {
            return this.isRookNotCollisioning(board, start, end);
        }
        else {
            return false;
        }
    }
}
exports.Rook = Rook;
//# sourceMappingURL=Rook.js.map