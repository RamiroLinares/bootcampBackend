import { Piece } from "./Piece";

export class Square {
    private piece: Piece;
    private x: Number;
    private y: Number;

    constructor(x: Number, y: Number, piece: Piece) {
    }
    getPiece():Piece {
        return this.piece;
    }

    setPiece(p:Piece) {
        this.piece = p;
    }

    getX():Number {
        return this.x;
    }

    setX(x:Number) {
        this.x = x;
    }

    getY():Number {
        return this.y;
    }

    setY(y:Number) {
        this.y = y;
    }
}