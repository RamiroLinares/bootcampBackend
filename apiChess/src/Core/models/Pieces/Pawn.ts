import { Piece } from "../Piece";
import { IBoard } from "../IBoard";
import { ISquare } from "../ISquare";

export class Pawn extends Piece {
    private firstMovement:boolean=true;
    
    constructor(white: boolean) {
        super(white);
    }

    isValidMoveForThisPiece(board:IBoard,start: ISquare, end: ISquare) {
        let xStartToEnd:number = (start.getX() - end.getX());
        let yStartToEnd:number = (start.getY() - end.getY());
        const amountMovement:number=1;
        const noAxisMovement:number=0;
        if((this.isWhite())
        &&((xStartToEnd===(-amountMovement))||(xStartToEnd===(-amountMovement-Number(this.firstMovement))))
        &&(yStartToEnd===noAxisMovement)){
            this.firstMovement=false;
            return true;
        }else if((!this.isWhite())
        &&((xStartToEnd===(amountMovement))||(xStartToEnd===(amountMovement+Number(this.firstMovement))))
        &&(yStartToEnd===noAxisMovement)){
            this.firstMovement=false;
            return true;
        }else if((end.getPiece()!==null)&&(xStartToEnd!==noAxisMovement)&&(yStartToEnd!==noAxisMovement)&&
        ((Math.abs(xStartToEnd)+Math.abs(yStartToEnd))===2*amountMovement)){
            return true;    
        }else{
            return false;
        }
    }
}