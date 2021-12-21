import { IPiece } from "./IPiece";
import { ISquare } from './ISquare';

export class Square implements ISquare {
    private piece: IPiece;
    private x: number;
    private y: number;

    constructor(x: number, y: number, piece: IPiece) {
        this.x = x;
        this.y = y;
        this.piece = piece;
    }
    getPiece(): IPiece {
        return this.piece;
    }

    setPiece(p: IPiece) {
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