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
            if ((xStartToEnd + yStartToEnd == 1)||(xStartToEnd + yStartToEnd == 2)) {
                return true;
            } else {
                return false;
            }
        }
}