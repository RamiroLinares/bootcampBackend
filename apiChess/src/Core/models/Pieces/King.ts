import { Piece } from "../Piece";
export class King extends Piece {
    constructor(white: boolean) {
        super(white);
    }

    isValidMoveForThisPiece(xStartToEnd: number, yStartToEnd: number) {
        if (xStartToEnd + yStartToEnd == 1) {
            return true;
        } else {
            return false;
        }
    }
}