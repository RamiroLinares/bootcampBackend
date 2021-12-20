import { Piece } from "../Piece";
import { IBoard } from "../IBoard";

export class Queen extends Piece {
    constructor(white: boolean) {
        super(white);
    }

    isValidMoveForThisPiece(board:IBoard,xStartToEnd: number, yStartToEnd: number) {
        if ((xStartToEnd == 0 && yStartToEnd != 0) || (xStartToEnd != 0 && yStartToEnd == 0)) {
            return true; //rook movement
        } else if (xStartToEnd===yStartToEnd){ //bishop movement
            return true;
        }else{
            return false;
        }
    }
}