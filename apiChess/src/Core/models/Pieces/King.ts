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
        const axisMovement: number = 0;
        const axisMovementTotal: number = 1;
        const crossAxisMovement: number = 2;
        if ((xStartToEnd === axisMovement && yStartToEnd !== axisMovement)
            || (xStartToEnd !== axisMovement && yStartToEnd === axisMovement)) {
            if ((xStartToEnd + yStartToEnd === axisMovementTotal)) { //can move more than 1 see
                return true;
            } else {
                return false;
            }
        } else {
            if ((xStartToEnd + yStartToEnd === crossAxisMovement)) { //can move more than 1 see
                return true;
            } else {
                return false;
            }
        }
    }
}