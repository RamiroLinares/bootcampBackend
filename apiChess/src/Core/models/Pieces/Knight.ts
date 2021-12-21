import { Piece } from "../Piece";
import { IBoard } from "../IBoard";
import { ISquare } from "../ISquare";

export class Knight extends Piece {
    constructor(white: boolean) {
        super(white);
    }

    isValidMoveForThisPiece(board: IBoard, start: ISquare, end: ISquare) {
        const xStartToEnd = Math.abs(start.getX() - end.getX());
        const yStartToEnd = Math.abs(start.getY() - end.getY());
        const amountMovement: number = 2;
        if (xStartToEnd * yStartToEnd === amountMovement) {
            return true;
        } else {
            return false;
        }
    }
}