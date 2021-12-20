import { Board } from "./Board";
import { Square } from "./Square";

export abstract class Piece {

    protected killed: boolean = false;
    protected white: boolean = false;

    constructor(white:boolean) {
        this.setWhite(white);
    }

    isWhite(): boolean {
        return this.white;
    }

    setWhite(white: boolean) {
        this.white = white;
    }

    isKilled(): boolean {
        return this.killed;
    }

    setKilled(killed: boolean) {
        this.killed = killed;
    }

    canMove(start: Square, end: Square) {
        if (end.getPiece().isWhite() == this.isWhite()) {
            return false;
        }
        let x = Math.abs(start.getX() - end.getX());
        let y = Math.abs(start.getY() - end.getY());

        return this.isValidMoveForThisPiece(x,y);
    };
    isValidMoveForThisPiece(x:number,y:number){
    }
}
