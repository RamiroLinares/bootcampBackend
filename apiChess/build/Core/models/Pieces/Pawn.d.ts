import { Piece } from "../Piece";
export declare class Pawn extends Piece {
    constructor(white: boolean);
    isValidMoveForThisPiece(xStartToEnd: number, yStartToEnd: number): boolean;
}
