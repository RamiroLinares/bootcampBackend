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

        if (this.isWhite()== end.getPiece()?.isWhite()) {
            return false;
        }
        let xStartToEnd = Math.abs(start.getX() - end.getX());
        let yStartToEnd = Math.abs(start.getY() - end.getY());

        if(this.isValidMoveForThisPiece(xStartToEnd,yStartToEnd)){
            return this.movePiece(start,end);
        }else{
            return false;}
    };
    movePiece(start: Square, end: Square){
        end.setPiece(start.getPiece());
        start.setPiece(null);
        return true;
    }
    abstract isValidMoveForThisPiece(xStartToEnd:number,yStartToEnd:number):boolean;
}