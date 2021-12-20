import { Piece } from "../Piece";

export class Rook extends Piece {
    constructor(white: boolean) {
        super(white);
    }

    isValidMoveForThisPiece(xStartToEnd: number, yStartToEnd: number) {
        if ((xStartToEnd == 0 && yStartToEnd != 0) || (xStartToEnd != 0 && yStartToEnd == 0)) {
            return true;
        } else {
            return false;
        }
    }
}