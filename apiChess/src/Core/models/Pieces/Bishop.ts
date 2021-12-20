import { Piece } from "../Piece";

export class Bishop extends Piece {
    constructor(white: boolean) {
        super(white);
    }

    isValidMoveForThisPiece(x: number, y: number) {
        if (x * y == 2) {
            return true;
        } else {
            return false;
        }
    }
}