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
    canMove(board, start, end) {
        var _a;
        if (this.isWhite() == ((_a = end.getPiece()) === null || _a === void 0 ? void 0 : _a.isWhite())) {
            return false;
        }
        if (this.isValidMoveForThisPiece(board, start, end)) {
            return this.movePiece(board, start, end);
        }
        else {
            return false;
        }
    }
    ;
    movePiece(board, start, end) {
        var _a;
        if (end.getPiece() != null) {
            (_a = end.getPiece()) === null || _a === void 0 ? void 0 : _a.setKilled(true);
            if (end.getPiece().constructor.name === 'King') {
                console.log("CHECK MATE! END OF MATCH");
                process.exit(1);
            }
        }
        end.setPiece(start.getPiece());
        start.setPiece(null);
        return true;
    }
}
exports.Piece = Piece;
//# sourceMappingURL=Piece.js.map