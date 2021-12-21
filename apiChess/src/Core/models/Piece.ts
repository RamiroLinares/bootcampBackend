import { ISquare } from "./ISquare";
import { IPiece } from './IPiece';
import { IBoard } from "./IBoard";

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

    canMove(board:IBoard, start: ISquare, end: ISquare):boolean {

        if (this.isWhite()=== end.getPiece()?.isWhite()) {
            return false;
        }
        
        if(this.isValidMoveForThisPiece(board, start, end)){
            return this.movePiece(board,start,end);
        }else{
            return false;}
    };
    movePiece(board:IBoard, start: ISquare, end: ISquare):boolean{
        if(end.getPiece()!==null){
            end.getPiece()?.setKilled(true);
            if(end.getPiece().constructor.name==='King'){
                console.log("CHECK MATE! END OF MATCH");
                process.exit(1);
            }
        }
        end.setPiece(start.getPiece());
        start.setPiece(null);
        return true;
    }
    abstract isValidMoveForThisPiece(board:IBoard,start: ISquare, end: ISquare):boolean;
}
