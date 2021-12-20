import { Piece } from "../Piece";
import { IBoard } from "../IBoard";

export class Knight extends Piece {
    constructor(white: boolean) {
        super(white);
    }

    isValidMoveForThisPiece(board:IBoard,xStartToEnd: number, yStartToEnd: number) {
        if (xStartToEnd * yStartToEnd == 2) {
            return true;
        } else {
            return false;
        }
    }
}