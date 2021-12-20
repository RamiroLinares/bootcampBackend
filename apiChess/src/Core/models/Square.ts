import { Piece } from "./Piece";

export class Square {
    private piece: Piece;
    private x: number;
    private y: number;

    constructor(x: number, y: number, piece: Piece) {
    }
    getPiece(): Piece {
        return this.piece;
    }

    setPiece(p: Piece) {
        this.piece = p;
    }

    getX(): number {
        return this.x;
    }

    setX(x: number) {
        this.x = x;
    }

    getY(): number {
        return this.y;
    }

    setY(y: number) {
        this.y = y;
    }
}