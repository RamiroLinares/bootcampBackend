import { Piece } from "../Piece";

export class Queen extends Piece {
    constructor(white: boolean) {
        super(white);
    }

    isValidMoveForThisPiece(xStartToEnd: number, yStartToEnd: number) {
        return true;
    }
}