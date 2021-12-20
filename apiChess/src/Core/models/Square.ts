import { Piece } from "./Piece";
import { ISquare } from './ISquare';

export class Square implements ISquare {
    private piece: Piece;
    private x: number;
    private y: number;

    constructor(x: number, y: number, piece: Piece) {
        this.x=x;
        this.y=y;
        this.piece=piece;
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