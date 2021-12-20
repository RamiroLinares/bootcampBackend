import { Piece } from "../Piece";
import { IBoard } from "../IBoard";
import { ISquare } from "../ISquare";

export class Rook extends Piece {
    constructor(white: boolean) {
        super(white);
    }

    isValidMoveForThisPiece(board:IBoard,start: ISquare, end: ISquare) {
        let xStartToEnd = Math.abs(start.getX() - end.getX());
        let yStartToEnd = Math.abs(start.getY() - end.getY());
        if ((xStartToEnd == 0 && yStartToEnd != 0) || (xStartToEnd != 0 && yStartToEnd == 0)) {
            return true;
        } else {
            return false;
        }
    }
}