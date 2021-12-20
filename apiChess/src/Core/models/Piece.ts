import { ISquare } from "./ISquare";
import { IPiece } from './IPiece';


export abstract class Piece implements IPiece{

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

    canMove(start: ISquare, end: ISquare):boolean {

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
    movePiece(start: ISquare, end: ISquare):boolean{
        end.setPiece(start.getPiece());
        start.setPiece(null);
        return true;
    }
    abstract isValidMoveForThisPiece(xStartToEnd:number,yStartToEnd:number):boolean;
}
