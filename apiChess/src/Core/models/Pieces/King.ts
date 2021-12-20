import { Piece } from "../Piece";

export class King extends Piece {
    constructor(white: boolean) {
        super(white);
    }

    isValidMoveForThisPiece(x: number, y: number) {
        if (x + y == 1) {
            // check if this move will not result in the king being attacked if so return true
            return true;
        } else {
            return false;
        }
    }
}