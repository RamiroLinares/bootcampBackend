import { Piece } from "../Piece";
import { IBoard } from "../IBoard";

export class King extends Piece {
    constructor(white: boolean) {
        super(white);
    }

    isValidMoveForThisPiece(board:IBoard,xStartToEnd: number, yStartToEnd: number) {
        if (xStartToEnd + yStartToEnd == 1) {
            return true;
        } else {
            return false;
        }
    }
}