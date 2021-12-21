import { Piece } from "../Piece";
import { IBoard } from "../IBoard";
import { ISquare } from "../ISquare";

export class King extends Piece {
    constructor(white: boolean) {
        super(white);
    }

    isValidMoveForThisPiece(board: IBoard, start: ISquare, end: ISquare) {
        let xStartToEnd = Math.abs(start.getX() - end.getX());
        let yStartToEnd = Math.abs(start.getY() - end.getY());
        if ((xStartToEnd == 0 && yStartToEnd != 0) || (xStartToEnd != 0 && yStartToEnd == 0)) {
            if ((xStartToEnd + yStartToEnd == 1)) { //can move more than 1 see
                return true;
            } else {
                return false;
            }
        }else{
            if ((xStartToEnd + yStartToEnd == 2)) { //can move more than 1 see
                return true;
            } else {
                return false;
            }
        }    
        }
}