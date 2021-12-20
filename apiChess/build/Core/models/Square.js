"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
class Square {
    constructor(x, y, piece) {
        this.x = x;
        this.y = y;
        this.piece = piece;
    }
    getPiece() {
        return this.piece;
    }
    setPiece(p) {
        this.piece = p;
    }
    getX() {
        return this.x;
    }
    setX(x) {
        this.x = x;
    }
    getY() {
        return this.y;
    }
    setY(y) {
        this.y = y;
    }
}
exports.Square = Square;
//# sourceMappingURL=Square.js.map