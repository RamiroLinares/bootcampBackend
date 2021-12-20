import { Piece } from "../Piece";
export declare class King extends Piece {
    constructor(white: boolean);
    isValidMoveForThisPiece(xStartToEnd: number, yStartToEnd: number): boolean;
}
