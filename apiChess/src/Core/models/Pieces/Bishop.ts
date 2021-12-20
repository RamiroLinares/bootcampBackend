import { Piece } from "../Piece";
import { IBoard } from "../IBoard";

export class Bishop extends Piece {
    constructor(white: boolean) {
        super(white);
    }
    isValidMoveForThisPiece(board:IBoard,xStartToEnd: number, yStartToEnd: number) {
        if(xStartToEnd===yStartToEnd){
            return true;
        }else{
            return false;
        }
    }
}