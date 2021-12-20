import { Piece } from "../Piece";

export class Knight extends Piece {
    constructor(white: boolean) {
        super(white);
    }

    isValidMoveForThisPiece(xStartToEnd: number, yStartToEnd: number) {
        if (xStartToEnd * yStartToEnd == 2) {
            return true;
        } else {
            return false;
        }
    }
}